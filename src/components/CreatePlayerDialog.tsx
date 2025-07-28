"use client";

import { PlayerFormInput, playerFormSchema } from "@/schemas/playerForm";
import CreateOrEditPlayerForm from "./CreateOrEditPlayerForm";
import { Dialog, DialogFooter, DialogHeader } from "./Dialog";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Form } from "./ui/form";
import { Loader2Icon } from "lucide-react";
import { createPlayer } from "@/actions";

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
      trigger={<Button>プレイヤーを作成</Button>}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <DialogHeader>プレイヤーを作成</DialogHeader>
      <Form {...form}>
        <CreateOrEditPlayerForm
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
