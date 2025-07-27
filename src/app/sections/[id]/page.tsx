import Breadcrumb from "@/components/Breadcrumb";
import GameCard from "@/components/GameCard";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <>
      <Breadcrumb
        items={[
          { title: "ホーム", path: "/" },
          { title: "セクション一覧", path: "/sections" },
          {
            title: new Date("2025-06-28").toLocaleDateString("ja-JP"),
            path: `/sections/${(await params).id}`,
          },
        ]}
      />
      <div className="mt-4 space-y-8">
        {[
          [
            { name: "きむら", points: 22900 },
            { name: "かいと", points: 18300 },
            { name: "だいち", points: 40800 },
            { name: "えいご", points: 18000 },
          ],
          [
            { name: "きむら", points: 11300 },
            { name: "かいと", points: 31800 },
            { name: "だいち", points: 18300 },
            { name: "えいご", points: 38600 },
          ],
          [
            { name: "きむら", points: 18500 },
            { name: "かいと", points: 28800 },
            { name: "だいち", points: 18200 },
            { name: "えいご", points: 34500 },
          ],
        ].map((players, index) => (
          <GameCard
            key={index}
            title={`${index + 1}ゲーム目`}
            players={players}
          />
        ))}
      </div>
    </>
  );
}
