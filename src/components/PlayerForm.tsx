"use client";

import { DefaultValues, useForm } from "react-hook-form";
import { PlayerFormInput, playerFormSchema } from "@/schemas/playerForm";
import { FormField } from "./ui/form";
import FormItem from "./FormItem";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import FormTemplate from "./FormTemplate";

export default function PlayerForm({
  onSuccess,
  onIsSubmittingChange,
  defaultValues,
  formId,
  action,
}: {
  onSuccess: () => void;
  onIsSubmittingChange: (isSubmitting: boolean) => void;
  defaultValues: DefaultValues<PlayerFormInput>;
  formId: string;
  action: (data: PlayerFormInput) => Promise<unknown>;
}) {
  const form = useForm<PlayerFormInput>({
    mode: "onBlur",
    resolver: zodResolver(playerFormSchema),
    defaultValues: defaultValues,
  });

  const { control } = form;

  return (
    <FormTemplate
      form={form}
      formId={formId}
      action={action}
      onSuccess={onSuccess}
      onIsSubmittingChange={onIsSubmittingChange}
    >
      <FormField
        control={control}
        name="name"
        render={({ field }) => (
          <FormItem
            label="名前"
            description="プレイヤーの名前を入力してください。"
          >
            <Input {...field} />
          </FormItem>
        )}
      />
    </FormTemplate>
  );
}
