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
  clearOnSuccess = false,
}: {
  onSuccess: () => void;
  onIsSubmittingChange: (isSubmitting: boolean) => void;
  defaultValues: DefaultValues<PlayerFormInput>;
  formId: string;
  action: (data: PlayerFormInput) => Promise<unknown>;
  clearOnSuccess?: boolean;
}) {
  const form = useForm<PlayerFormInput>({
    mode: "onBlur",
    resolver: zodResolver(playerFormSchema),
    defaultValues: defaultValues,
  });

  const { reset, control } = form;

  const onSubmit = async (data: PlayerFormInput) => {
    await action(data);
    onSuccess();
    if (clearOnSuccess) reset();
  };

  return (
    <FormTemplate
      form={form}
      formId={formId}
      onSubmit={onSubmit}
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
