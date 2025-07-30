"use client";

import { FieldValues, UseFormReturn } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { useEffect } from "react";

export default function FormTemplate<T extends FieldValues>({
  onSubmit,
  onIsSubmittingChange,
  children,
  formId,
  form,
  className,
}: {
  onSubmit: (data: T) => Promise<void>;
  onIsSubmittingChange: (isSubmitting: boolean) => void;
  children: React.ReactNode;
  formId: string;
  form: UseFormReturn<T>;
  className?: string;
}) {
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  useEffect(() => {
    onIsSubmittingChange(isSubmitting);
  }, [isSubmitting, onIsSubmittingChange]);

  return (
    <Form {...form}>
      <form id={formId} className={className} onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </Form>
  );
}
