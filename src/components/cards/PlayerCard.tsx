import EditPlayerDialog from "../dialogs/EditPlayerDialog";
import { Player } from "@/generated/prisma";
import DeletePlayerAlertDialog from "../alert-dialogs/DeletePlayerAlertDialog";
import dayjs from "dayjs";

export default function PlayerCard({ player }: { player: Player }) {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex-1">
        <div>{player.name}</div>
        <div className="mt-0.5 text-sm">
          作成日: {dayjs(player.createdAt).format("YYYY/MM/DD")}
        </div>
      </div>
      <EditPlayerDialog id={player.id} name={player.name} />
      <DeletePlayerAlertDialog id={player.id} name={player.name} />
    </div>
  );
}
