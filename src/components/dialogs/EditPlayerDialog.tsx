"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import PlayerForm from "@/components/PlayerForm";
import DialogTemplate from "@/components/DialogTemplate";
import { EditIcon } from "lucide-react";
import { updatePlayer } from "@/app/actions";

export default function EditPlayerDialog({
  id,
  name,
}: {
  id: string;
  name: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSuccess = () => {
    setIsOpen(false);
  };

  return (
    <DialogTemplate
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      trigger={
        <Button variant={"ghost"} size={"icon"}>
          <EditIcon />
        </Button>
      }
      headerText="プレイヤーを編集"
      formId="edit-player-form"
      isSubmitting={isSubmitting}
      submitButtonText="保存"
    >
      <PlayerForm
        onSuccess={handleSuccess}
        onIsSubmittingChange={setIsSubmitting}
        formId="edit-player-form"
        defaultValues={{ name: name }}
        action={async (data) => await updatePlayer(id, data)}
      />
    </DialogTemplate>
  );
}
