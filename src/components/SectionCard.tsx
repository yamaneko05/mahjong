import Link from "next/link";
import { Table, TableBody, TableCell, TableRow } from "./ui/table";
import { cn } from "@/lib/utils";

export default function SectionCard({
  id,
  title,
  rate,
  startingPoints,
  players,
}: {
  id: string;
  title: string;
  rate: string;
  startingPoints: number;
  players: {
    name: string;
    result: number;
  }[];
}) {
  return (
    <div>
      <h3 className="font-bold text-xl">
        <Link href={`/sections/${id}`}>{title}</Link>
      </h3>
      <ul className="mt-3 text-sm space-y-2">
        <li>
          <b>レート</b>: {rate}
        </li>
        <li>
          <b>持ち点</b>: {startingPoints.toLocaleString("ja-JP")}
        </li>
      </ul>
      <Table className="mt-2">
        <TableBody>
          {players.map((player, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{player.name}</TableCell>
              <TableCell
                className={cn(
                  player.result > 0 ? "text-green-500" : "text-red-500"
                )}
              >
                {player.result.toLocaleString("ja-JP", {
                  style: "currency",
                  currency: "JPY",
                })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
