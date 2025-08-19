"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import DialogTemplate from "../DialogTemplate";
import SectionForm from "../SectionForm";
import dayjs from "@/lib/dayjs";
import { STARTING_POINTS_ARRAY } from "@/constants/startingPointsConstants";
import { useRates } from "@/app/hooks/rateHooks";
import { useCreateSection } from "@/app/hooks/sectionHooks";

export default function CreateSectionDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const rates = useRates();

  const { mutateAsync: createSection } = useCreateSection();

  return (
    <DialogTemplate
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      trigger={<Button>セクションを作成</Button>}
      headerText="セクションを作成"
      formId="create-section-form"
      isSubmitting={isSubmitting}
      submitButtonText="作成"
    >
      <SectionForm
        onSuccess={() => setIsOpen(false)}
        onIsSubmittingChange={setIsSubmitting}
        formId="create-section-form"
        defaultValues={{
          date: dayjs().format("YYYY-MM-DD"),
          rateId: rates && rates[0].id,
          startingPoints: STARTING_POINTS_ARRAY[0],
          playerIds: [],
        }}
        action={async (data) => await createSection(data)}
        clearOnSuccess
      />
    </DialogTemplate>
  );
}
