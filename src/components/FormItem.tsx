"use client";

import {
  FormControl,
  FormDescription,
  FormItem as ShadcnFormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function FormItem({
  label,
  description,
  children,
}: {
  label: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <ShadcnFormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>{children}</FormControl>
      {description && <FormDescription>{description}</FormDescription>}
      <FormMessage />
    </ShadcnFormItem>
  );
}
