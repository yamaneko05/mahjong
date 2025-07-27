import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Breadcrumb items={[{ title: "ホーム", path: "/" }]} />
      <div className="mt-4 space-y-2">
        <Button asChild variant={"outline"} className="block">
          <Link href={"/sections"}>セクション一覧</Link>
        </Button>
        <Button asChild variant={"outline"} className="block">
          <Link href={"/players"}>プレイヤー設定</Link>
        </Button>
      </div>
    </>
  );
}
