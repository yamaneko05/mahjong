"use client";

import { FieldValues, UseFormReturn } from "react-hook-form";
import { Form } from "./ui/form";
import { useEffect } from "react";

export default function FormTemplate<T extends FieldValues>({
  onSuccess,
  onIsSubmittingChange,
  children,
  formId,
  form,
  action,
}: {
  onSuccess: () => void;
  onIsSubmittingChange: (isSubmitting: boolean) => void;
  children: React.ReactNode;
  formId: string;
  form: UseFormReturn<T>;
  action: (data: T) => Promise<unknown>;
}) {
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (data: T) => {
    await action(data);
    onSuccess();
    reset();
  };

  useEffect(() => {
    onIsSubmittingChange(isSubmitting);
  }, [isSubmitting, onIsSubmittingChange]);

  return (
    <Form {...form}>
      <form id={formId} onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </Form>
  );
}
