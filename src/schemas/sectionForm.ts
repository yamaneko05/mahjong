import { STARTING_POINTS_ARRAY } from "@/constants/startingPointsConstants";
import { z } from "zod";

export const sectionFormSchema = z.object({
  date: z.iso.date({ message: "日付を選択してください。" }),
  rateId: z.string(),
  startingPoints: z.literal(STARTING_POINTS_ARRAY),
  playerIds: z
    .array(z.string())
    .min(3, "3人以上のプレイヤーを選択してください。")
    .max(4, "4人以下のプレイヤーを選択してください"),
});

export type sectionFormInput = z.infer<typeof sectionFormSchema>;
