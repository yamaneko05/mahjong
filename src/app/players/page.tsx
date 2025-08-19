import Breadcrumb from "@/components/Breadcrumb";
import CreatePlayerDialog from "@/components/dialogs/CreatePlayerDialog";
import PlayerList from "@/components/lists/PlayerList";

export default async function Page() {
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
      <div className="mt-4">
        <PlayerList />
      </div>
    </>
  );
}
