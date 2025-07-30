"use client";

import {
  Dialog as ShadcnDialog,
  DialogClose,
  DialogContent,
  DialogFooter as ShadcnDialogFooter,
  DialogHeader as ShadcnDialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import React from "react";

export function Dialog({
  isOpen,
  setIsOpen,
  trigger,
  children,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  trigger: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <ShadcnDialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="gap-6" aria-describedby={undefined}>
        {children}
      </DialogContent>
    </ShadcnDialog>
  );
}

export function DialogHeader({ children }: { children: React.ReactNode }) {
  return (
    <ShadcnDialogHeader>
      <DialogTitle>{children}</DialogTitle>
    </ShadcnDialogHeader>
  );
}

export function DialogFooter({ children }: { children: React.ReactNode }) {
  return (
    <ShadcnDialogFooter>
      <DialogClose asChild>
        <Button variant="outline">キャンセル</Button>
      </DialogClose>
      {children}
    </ShadcnDialogFooter>
  );
}
