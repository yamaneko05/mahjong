"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import DialogTemplate from "../DialogTemplate";
import PlayerForm from "../PlayerForm";
import { useCreatePlayer } from "@/app/hooks/playerHooks";

export default function CreatePlayerDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const createPlayer = useCreatePlayer();

  return (
    <DialogTemplate
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      trigger={<Button>プレイヤーを作成</Button>}
      headerText="プレイヤーを作成"
      formId="create-player-form"
      isSubmitting={isSubmitting}
      submitButtonText="作成"
    >
      <PlayerForm
        onSuccess={() => setIsOpen(false)}
        onIsSubmittingChange={setIsSubmitting}
        formId="create-player-form"
        defaultValues={{ name: "" }}
        action={async (data) => await createPlayer.mutateAsync(data)}
        clearOnSuccess
      />
    </DialogTemplate>
  );
}
