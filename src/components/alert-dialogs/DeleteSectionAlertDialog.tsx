"use client";

import { Trash2Icon } from "lucide-react";
import AlertDialog from "@/components/AlertDialog";
import { Button } from "@/components/ui/button";
import { deleteSection } from "@/app/actions";
import { useState } from "react";

export default function DeleteSectionAlertDialog({
  id,
  name,
}: {
  id: string;
  name: string;
}) {
  const handleContinue = async () => {
    await deleteSection(id);
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
