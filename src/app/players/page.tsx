import Breadcrumb from "@/components/Breadcrumb";
import CreatePlayerDialog from "@/components/CreatePlayerDialog";
import PlayerCard from "@/components/PlayerCard";
import { prisma } from "@/lib/prisma";

async function getPlayers() {
  const players = await prisma.player.findMany({
    orderBy: { name: "asc" },
  });
  return players;
}

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
