import { CircleCheckIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function GameCard({
  title,
  players,
}: {
  title: string;
  players: {
    name: string;
    points: number;
  }[];
}) {
  return (
    <div className="">
      <h3 className="font-bold text-lg text-center">{title}</h3>
      <div className="flex gap-2 mt-2">
        {players.map((player, index) => (
          <div key={index}>
            <div className="text-center text-sm">{player.name}</div>
            <Input
              defaultValue={player.points.toLocaleString("ja-JP")}
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
