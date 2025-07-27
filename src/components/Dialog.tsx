import {
  Dialog as ShadcnDialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import React from "react";

export default function Dialog({
  title,
  action,
  trigger,
  content,
}: {
  title: string;
  action: string;
  trigger: React.ReactNode;
  content: React.ReactNode;
}) {
  return (
    <ShadcnDialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="gap-6">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {content}
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">キャンセル</Button>
          </DialogClose>
          <Button type="submit">{action}</Button>
        </DialogFooter>
      </DialogContent>
    </ShadcnDialog>
  );
}
