import Breadcrumb from "@/components/Breadcrumb";
import CreatePlayerDialog from "@/components/dialogs/CreatePlayerDialog";
import PlayerCard from "@/components/cards/PlayerCard";
import { getPlayers } from "@/app/actions";

export default async function Page() {
  const players = await getPlayers();

  return (
    <>
      <Breadcrumb
        items={[
          { title: "ホーム", path: "/" },
          { title: "プレイヤー設定", path: "/players" },
        ]}
      />
      <div className="mt-4 flex flex-row-reverse">
        <CreatePlayerDialog />
      </div>
      <div className="mt-4 space-y-4">
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </>
  );
}
