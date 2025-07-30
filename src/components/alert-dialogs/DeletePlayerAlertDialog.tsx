"use client";

import { Trash2Icon } from "lucide-react";
import AlertDialog from "../AlertDialog";
import { Button } from "../ui/button";
import { deletePlayer } from "@/actions";
import { useState } from "react";

export default function DeletePlayerAlertDialog({
  id,
  name,
}: {
  id: string;
  name: string;
}) {
  const handleContinue = async () => {
    await deletePlayer(id);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <AlertDialog
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="プレイヤーを削除"
      description={`${name}を削除しますか？`}
      action="削除"
      trigger={
        <Button variant={"ghost"} size={"icon"}>
          <Trash2Icon />
        </Button>
      }
      onContinue={handleContinue}
    />
  );
}
