"use client";

import { Control } from "react-hook-form";
import { PlayerFormInput } from "@/schemas/playerForm";
import FormField from "./FormField";
import { FormEventHandler } from "react";

export default function CreateOrEditPlayerForm({
  handleSubmit,
  control,
}: {
  handleSubmit: FormEventHandler;
  control: Control<PlayerFormInput>;
}) {
  return (
    <form id="create-player-form" onSubmit={handleSubmit}>
      <FormField
        control={control}
        name="name"
        label="名前"
        description="プレイヤーの名前を入力してください。"
      />
    </form>
  );
}
