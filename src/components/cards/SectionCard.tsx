import Link from "next/link";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Player, Rate, Section, SectionResult } from "@/generated/prisma";
import dayjs from "dayjs";
import { DATE_FORMAT } from "@/constants/dateFormatConstants";

export default function SectionCard({
  section,
}: {
  section: Section & {
    rate: Rate;
    sectionResults: (SectionResult & { player: Player })[];
  };
}) {
  return (
    <div>
      <h3 className="font-bold text-xl">
        <Link href={`/sections/${section.id}`}>
          {dayjs(section.date).format(DATE_FORMAT)}
        </Link>
      </h3>
      <ul className="mt-3 text-sm space-y-2">
        <li>
          <b>レート</b>: {section.rate.name}
        </li>
        <li>
          <b>持ち点</b>: {section.startingPoints.toLocaleString("ja-JP")}
        </li>
      </ul>
      <Table className="mt-2">
        <TableBody>
          {section.sectionResults.map((result, index) => (
            <TableRow key={result.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{result.player.name}</TableCell>
              <TableCell
                className={cn(
                  result.point > 0 ? "text-green-500" : "text-red-500"
                )}
              >
                {result.point.toLocaleString("ja-JP", {
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
