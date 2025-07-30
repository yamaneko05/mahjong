import { STARTING_POINTS_ARRAY } from "@/constants/startingPointsConstants";
import { z } from "zod";

export const sectionFormSchema = z.object({
  date: z.iso.date(),
  rateId: z.string(),
  startingPoints: z.literal(STARTING_POINTS_ARRAY),
  playerIds: z.array(z.string()).min(3).max(4),
});

export type sectionFormInput = z.infer<typeof sectionFormSchema>;
