import { EditIcon, Trash2Icon } from "lucide-react";
import { Button } from "./ui/button";
import AlertDialog from "./AlertDialog";
import EditPlayerDialog from "./EditPlayerDialog";

export default function PlayerCard({ id, name }: { id: number; name: string }) {
  return (
    <div className="flex space-x-2">
      <div className="flex-1">{name}</div>
      <EditPlayerDialog
        name={name}
        trigger={
          <Button variant={"ghost"} size={"icon"}>
            <EditIcon />
          </Button>
        }
      />
      <AlertDialog
        title="プレイヤーを削除"
        description={`${name}を削除しますか？`}
        action="削除"
      >
        <Button variant={"ghost"} size={"icon"}>
          <Trash2Icon />
        </Button>
      </AlertDialog>
    </div>
  );
}
