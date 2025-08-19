"use client";

import { Trash2Icon } from "lucide-react";
import AlertDialog from "@/components/AlertDialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useDeleteSection } from "@/app/hooks/sectionHooks";
import { useRouter } from "next/navigation";

export default function DeleteSectionAlertDialog({
  id,
  name,
}: {
  id: string;
  name: string;
}) {
  const { mutateAsync: deleteSection } = useDeleteSection();
  const router = useRouter();

  const handleContinue = async () => {
    await deleteSection(id);
    router.push("/sections");
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <AlertDialog
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="セクションを削除"
      description={`${name}を削除しますか？`}
      action="削除"
      trigger={
        <Button variant={"outline"}>
          <Trash2Icon />
        </Button>
      }
      onContinue={handleContinue}
    />
  );
}
