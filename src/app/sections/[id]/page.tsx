import { getSection } from "@/app/actions";
import DeleteSectionAlertDialog from "@/components/alert-dialogs/DeleteSectionAlertDialog";
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

  const formattedDate = dayjs(section.date).format(DATE_FORMAT);

  return (
    <>
      <Breadcrumb
        items={[
          { title: "ホーム", path: "/" },
          { title: "セクション一覧", path: "/sections" },
          {
            title: formattedDate,
            path: `/sections/${section.id}`,
          },
        ]}
      />
      <div className="mt-4">
        <h2 className="font-bold text-2xl">{formattedDate}</h2>
        <ul className="mt-3 text-sm space-y-2">
          <li>
            <b>レート</b>: {section.rate.name}
          </li>
          <li>
            <b>持ち点</b>: {section.startingPoints.toLocaleString("ja-JP")}
          </li>
        </ul>
        <div className="mt-3">
          <DeleteSectionAlertDialog id={section.id} name={formattedDate} />
        </div>
        <div className="mt-6 space-y-8">
          {section.games.map((game, index) => (
            <GameCard key={index} game={game} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}
