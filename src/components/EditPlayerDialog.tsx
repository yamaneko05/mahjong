import React from "react";
import CreateOrEditPlayerForm from "./CreateOrEditPlayerForm";
import Dialog from "./Dialog";

export default function EditPlayerDialog({
  name,
  trigger,
}: {
  name: string;
  trigger: React.ReactNode;
}) {
  return (
    <Dialog
      title="プレイヤーを編集"
      action="保存"
      trigger={trigger}
      content={<CreateOrEditPlayerForm name={name} />}
    />
  );
}
