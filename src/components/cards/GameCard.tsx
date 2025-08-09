import { CircleAlertIcon, CircleCheckIcon } from "lucide-react";
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
      <div className="flex items-center">
        <h3 className="font-bold flex-1">{index + 1}ゲーム目</h3>
        {false ? (
          <div className="text-green-500">
            <CircleCheckIcon className="inline-block size-4" />
          </div>
        ) : (
          <div className="text-red-500">
            <CircleAlertIcon className="inline-block size-4" />
            <span className="ml-1 text-xs">合計点が多すぎます</span>
          </div>
        )}
      </div>
      <div className="flex gap-1 mt-2">
        {game.gameResults.map((result) => (
          <div key={result.id}>
            <div className="text-sm">{result.player.name}</div>
            <Input
              defaultValue={result.point.toLocaleString("ja-JP")}
              className="text-right mt-1"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
