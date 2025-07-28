"use client";

import { Control } from "react-hook-form";
import { PlayerFormInput } from "@/schemas/playerForm";
import FormField from "./FormField";
import { FormEventHandler } from "react";
import dayjs from "dayjs";
import RateSetting from "./RateSetting";
import StartingPointsSetting from "./StartingPointsSetting";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import PlayersSetting from "./PlayersSetting";

export default function CreateSectionForm({
  handleSubmit,
  control,
}: {
  handleSubmit: FormEventHandler;
  control: Control<PlayerFormInput>;
}) {
  return (
    <form id="create-player-form" onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="date">日付</Label>
        <Input
          id="date"
          type="date"
          defaultValue={dayjs().format("YYYY-MM-DD")}
          className="mt-2"
        />
      </div>
      <div className="mt-6">
        <RateSetting />
      </div>
      <div className="mt-6">
        <StartingPointsSetting />
      </div>
      <div className="mt-6">
        <PlayersSetting />
      </div>
    </form>
  );
}
