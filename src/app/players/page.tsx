import Breadcrumb from "@/components/Breadcrumb";
import CreatePlayerDialog from "@/components/CreatePlayerDialog";
import PlayerCard from "@/components/PlayerCard";

export default function Page() {
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
      <div className="mt-4 space-y-2">
        {[
          { id: 1, name: "えいご" },
          { id: 2, name: "おうた" },
          { id: 3, name: "かいと" },
          { id: 4, name: "きむら" },
          { id: 5, name: "だいち" },
        ].map((player) => (
          <PlayerCard key={player.id} id={player.id} name={player.name} />
        ))}
      </div>
    </>
  );
}
