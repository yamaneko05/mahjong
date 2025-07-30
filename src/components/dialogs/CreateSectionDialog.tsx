"use client";

import { PlayerFormInput, playerFormSchema } from "@/schemas/playerForm";
import { Dialog, DialogFooter, DialogHeader } from "../Dialog";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Form } from "../ui/form";
import { Loader2Icon } from "lucide-react";
import { createPlayer } from "@/actions";
import CreateSectionForm from "../CreateSectionForm";

export default function CreatePlayerDialog() {
  const form = useForm<PlayerFormInput>({
    mode: "onBlur",
    resolver: zodResolver(playerFormSchema),
    defaultValues: {
      name: "",
    },
  });
  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (data: PlayerFormInput) => {
    await createPlayer(data);
    setIsOpen(false);
    form.reset();
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog
      trigger={<Button>セクションを作成</Button>}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <DialogHeader>セクション設定</DialogHeader>
      <Form {...form}>
        <CreateSectionForm
          handleSubmit={form.handleSubmit(onSubmit)}
          control={form.control}
        />
      </Form>
      <DialogFooter>
        <Button type="submit" form="create-player-form" disabled={isLoading}>
          {isLoading && <Loader2Icon className="animate-spin" />}
          作成
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
