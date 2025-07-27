import CreatePlayerForm from "./CreateOrEditPlayerForm";
import Dialog from "./Dialog";
import { Button } from "./ui/button";

export default function CreatePlayerDialog() {
  return (
    <Dialog
      title="プレイヤーを作成"
      action="プレイヤーを作成"
      trigger={<Button>プレイヤーを作成</Button>}
      content={<CreatePlayerForm />}
    />
  );
}
