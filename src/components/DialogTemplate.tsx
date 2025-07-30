"use client";

import { Dialog, DialogFooter, DialogHeader } from "./Dialog";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";

export default function DialogTemplate({
  trigger,
  headerText,
  formId,
  submitButtonText,
  isOpen,
  setIsOpen,
  isSubmitting,
  children,
}: {
  trigger: React.ReactNode;
  headerText: string;
  formId: string;
  submitButtonText: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isSubmitting: boolean;
  children: React.ReactNode;
}) {
  return (
    <Dialog trigger={trigger} isOpen={isOpen} setIsOpen={setIsOpen}>
      <DialogHeader>{headerText}</DialogHeader>
      {children}
      <DialogFooter>
        <Button type="submit" form={formId} disabled={isSubmitting}>
          {isSubmitting && <Loader2Icon className="animate-spin" />}
          {submitButtonText}
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
