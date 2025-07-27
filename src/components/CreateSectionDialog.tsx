import CreateSectionForm from "./CreateSectionForm";
import Dialog from "./Dialog";
import { Button } from "./ui/button";

export default function CreateSectionDialog() {
  return (
    <Dialog
      title="セクションを作成"
      action="セクションを作成"
      trigger={<Button>セクションを作成</Button>}
      content={<CreateSectionForm />}
    />
  );
}
