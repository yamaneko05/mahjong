"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "./lib/prisma";
import { PlayerFormInput, playerFormSchema } from "./schemas/playerForm";
import { Prisma } from "./generated/prisma";

export async function createPlayer(data: PlayerFormInput) {
  const parsed = playerFormSchema.safeParse(data);

  if (!parsed.success) {
    console.error("Validation failed", parsed.error);
    return { success: false, error: parsed.error.flatten() };
  }

  const { name } = parsed.data;

  await prisma.player.create({
    data: { name },
  });
  revalidatePath("/players");
  return { success: true };
}

export async function updatePlayer(id: string, data: PlayerFormInput) {
  const parsed = playerFormSchema.safeParse(data);

  if (!parsed.success) {
    console.error("Validation failed", parsed.error);
    return { success: false, error: parsed.error.flatten() };
  }

  const { name } = parsed.data;

  try {
    await prisma.player.update({
      where: { id },
      data: { name },
    });
    revalidatePath("/players");
    return { success: true };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        console.error("Player not found", id);
        return { success: false, error: "Player not found" };
      }
    }
    console.error("Error deleting player", error);
    return { success: false, error: "Failed to delete player" };
  }
}

export async function deletePlayer(id: string) {
  try {
    await prisma.player.delete({
      where: { id },
    });
    revalidatePath("/players");
    return { success: true };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        console.error("Player not found", id);
        return { success: false, error: "Player not found" };
      }
    }
    console.error("Error deleting player", error);
    return { success: false, error: "Failed to delete player" };
  }
}
