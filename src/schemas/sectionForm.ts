import z from "zod";

export const sectionFormSchema = z.object({
  date: z.date(),
});

export type sectionFormInput = z.infer<typeof sectionFormSchema>;
