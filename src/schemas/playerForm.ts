import { z } from "zod";

export const playerFormSchema = z.object({
  name: z.string().min(1, "名前は必須です。"),
});

export type PlayerFormInput = z.infer<typeof playerFormSchema>;
