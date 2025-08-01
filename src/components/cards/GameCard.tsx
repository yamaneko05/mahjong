import { CircleCheckIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Game, GameResult, Player } from "@/generated/prisma";

export default function GameCard({
  game,
  index,
}: {
  game: Game & { gameResults: (GameResult & { player: Player })[] };
  index: number;
}) {
  return (
    <div className="">
      <h3 className="font-bold text-lg text-center">{index + 1}ゲーム目</h3>
      <div className="flex gap-2 mt-2">
        {game.gameResults.map((result) => (
          <div key={result.id}>
            <div className="text-center text-sm">{result.player.name}</div>
            <Input
              defaultValue={result.point.toLocaleString("ja-JP")}
              className="text-center mt-1"
            />
          </div>
        ))}
      </div>
      <div className="mt-2 text-center text-green-500">
        <CircleCheckIcon className="inline-block size-4" />
        <span className="ml-2 text-xs ">正常なスコア</span>
      </div>
      {/* <div className="mt-2 text-center text-red-500">
        <CircleAlertIcon className="inline-block size-4" />
        <span className="ml-2 text-xs ">合計点が多すぎます</span>
      </div> */}
    </div>
  );
}
