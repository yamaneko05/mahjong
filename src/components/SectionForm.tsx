"use client";

import { DefaultValues, useForm } from "react-hook-form";
import { FormField } from "@/components/ui/form";
import FormItem from "./FormItem";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import FormTemplate from "./FormTemplate";
import { sectionFormInput, sectionFormSchema } from "@/schemas/sectionForm";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { STARTING_POINTS_ARRAY } from "@/constants/startingPointsConstants";
import { usePlayers } from "@/app/hooks/usePlayers";
import { useRates } from "@/app/hooks/useRates";

export default function SectionForm({
  onSuccess,
  onIsSubmittingChange,
  defaultValues,
  formId,
  action,
  clearOnSuccess = false,
}: {
  onSuccess: () => void;
  onIsSubmittingChange: (isSubmitting: boolean) => void;
  defaultValues: DefaultValues<sectionFormInput>;
  formId: string;
  action: (data: sectionFormInput) => Promise<unknown>;
  clearOnSuccess?: boolean;
}) {
  const form = useForm<sectionFormInput>({
    mode: "onBlur",
    resolver: zodResolver(sectionFormSchema),
    defaultValues: defaultValues,
  });

  const { reset, control } = form;

  const onSubmit = async (data: sectionFormInput) => {
    await action(data);
    onSuccess();
    if (clearOnSuccess) reset();
  };

  const players = usePlayers();
  const rates = useRates();

  return (
    <FormTemplate
      form={form}
      formId={formId}
      onSubmit={onSubmit}
      onIsSubmittingChange={onIsSubmittingChange}
      className="space-y-6"
    >
      <FormField
        control={control}
        name="date"
        render={({ field }) => (
          <FormItem
            label="日付"
            description="今日の日付がデフォルトで入ります。"
          >
            <Input type="date" {...field} />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="rateId"
        render={({ field }) => (
          <FormItem
            label="レート"
            description="今日の日付がデフォルトで入ります。"
          >
            <RadioGroup className="mt-2" {...field}>
              {rates?.map((rate) => (
                <div key={rate.id} className="flex items-center space-x-3">
                  <RadioGroupItem id={`rate-${rate.id}`} value={rate.id} />
                  <Label htmlFor={`rate-${rate.id}`}>{rate.name}</Label>
                </div>
              ))}
            </RadioGroup>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="startingPoints"
        render={({ field }) => (
          <FormItem
            label="持ち点"
            description="25,000点がデフォルトで入ります。"
          >
            <RadioGroup
              className="mt-2"
              {...field}
              value={field.value.toString()}
            >
              {STARTING_POINTS_ARRAY.map((startingPoints, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <RadioGroupItem
                    id={`startingPoints-${index}`}
                    value={startingPoints.toString()}
                  />
                  <Label htmlFor={`startingPoints-${index}`}>
                    {startingPoints.toLocaleString("ja-JP")}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="playerIds"
        render={({ field }) => (
          <FormItem
            label="プレイヤー"
            description="3人もしくは4人を選択してください。"
          >
            <div className="mt-2 space-y-2">
              {players?.map((player) => (
                <div key={player.id} className="flex items-center space-x-3">
                  <Checkbox
                    id={`players-${player.id}`}
                    checked={field.value.includes(player.id)}
                    onCheckedChange={(checked) => {
                      return checked
                        ? field.onChange([...field.value, player.id])
                        : field.onChange(
                            field.value?.filter((value) => value !== player.id)
                          );
                    }}
                  />
                  <div className="text-sm">
                    <label
                      htmlFor={`players-${player.id}`}
                      className="font-medium text-gray-900"
                    >
                      {player.name}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </FormItem>
        )}
      />
    </FormTemplate>
  );
}
