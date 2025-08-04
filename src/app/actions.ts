"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { PlayerFormInput, playerFormSchema } from "@/schemas/playerForm";
import { Prisma } from "@/generated/prisma";
import { sectionFormInput, sectionFormSchema } from "@/schemas/sectionForm";
import dayjs from "@/lib/dayjs";

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

export async function getPlayers() {
  const players = await prisma.player.findMany({
    orderBy: { name: "asc" },
  });
  return players;
}

export async function getRates() {
  const rates = await prisma.rate.findMany({
    orderBy: { rate: "asc" },
  });
  return rates;
}

export async function getSections() {
  const sections = await prisma.section.findMany({
    orderBy: { date: "desc" },
    include: {
      rate: true,
      sectionResults: {
        orderBy: { result: "desc" },
        include: {
          player: true,
        },
      },
    },
  });
  return sections;
}

export async function getSection(id: string) {
  const section = await prisma.section.findUniqueOrThrow({
    where: { id: id },
    include: {
      rate: true,
      games: {
        include: {
          gameResults: {
            include: {
              player: true,
            },
          },
        },
      },
    },
  });
  return section;
}

export async function createSection(data: sectionFormInput) {
  const parsed = sectionFormSchema.safeParse(data);

  if (!parsed.success) {
    console.error("Validation failed", parsed.error);
    return { success: false, error: parsed.error.flatten() };
  }

  const { date, rateId, startingPoints, playerIds } = parsed.data;

  await prisma.section.create({
    data: {
      date: dayjs(date).toISOString(),
      rateId: rateId,
      startingPoints: Number(startingPoints.replace(",", "")),
      players: {
        connect: playerIds.map((id) => ({ id: id })),
      },
    },
  });

  revalidatePath("/sections");
  return { success: true };
}
