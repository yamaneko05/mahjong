import { getSection } from "@/app/actions";
import Breadcrumb from "@/components/Breadcrumb";
import GameCard from "@/components/cards/GameCard";
import { DATE_FORMAT } from "@/constants/dateFormatConstants";
import dayjs from "@/lib/dayjs";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const section = await getSection((await params).id);

  return (
    <>
      <Breadcrumb
        items={[
          { title: "ホーム", path: "/" },
          { title: "セクション一覧", path: "/sections" },
          {
            title: dayjs(section.date).format(DATE_FORMAT),
            path: `/sections/${section.id}`,
          },
        ]}
      />
      <div className="mt-4 space-y-8">
        {section.games.map((game, index) => (
          <GameCard key={index} game={game} index={index} />
        ))}
      </div>
    </>
  );
}
