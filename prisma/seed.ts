import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // 既存のデータを削除 (オプション)
  await prisma.sectionResult.deleteMany();
  await prisma.gameResult.deleteMany();
  await prisma.game.deleteMany();
  await prisma.section.deleteMany();
  await prisma.player.deleteMany();
  await prisma.rate.deleteMany();
  console.log("Cleared existing data.");

  // Rateデータを作成
  const rate1 = await prisma.rate.create({
    data: {
      name: "Standard Rate",
      rate: 0.5,
    },
  });
  const rate2 = await prisma.rate.create({
    data: {
      name: "High Rate",
      rate: 1.0,
    },
  });
  console.log("Created rates.");

  // Playerデータを作成
  const player1 = await prisma.player.create({
    data: {
      name: "Alice",
    },
  });
  const player2 = await prisma.player.create({
    data: {
      name: "Bob",
    },
  });
  const player3 = await prisma.player.create({
    data: {
      name: "Charlie",
    },
  });
  console.log("Created players.");

  // Sectionデータを作成
  const section1 = await prisma.section.create({
    data: {
      date: new Date("2024-07-20T10:00:00Z"),
      startingPoints: 1000,
      rateId: rate1.id,
      players: {
        connect: [{ id: player1.id }, { id: player2.id }, { id: player3.id }],
      },
    },
  });
  const section2 = await prisma.section.create({
    data: {
      date: new Date("2024-07-21T14:00:00Z"),
      startingPoints: 2000,
      rateId: rate2.id,
      players: {
        connect: [{ id: player1.id }, { id: player2.id }],
      },
    },
  });
  console.log("Created sections.");

  // Gameデータを作成
  const game1_s1 = await prisma.game.create({
    data: {
      sectionId: section1.id,
    },
  });
  const game2_s1 = await prisma.game.create({
    data: {
      sectionId: section1.id,
    },
  });
  const game1_s2 = await prisma.game.create({
    data: {
      sectionId: section2.id,
    },
  });
  console.log("Created games.");

  // GameResultデータを作成
  await prisma.gameResult.createMany({
    data: [
      {
        gameId: game1_s1.id,
        playerId: player1.id,
        point: 50,
      },
      {
        gameId: game1_s1.id,
        playerId: player2.id,
        point: -20,
      },
      {
        gameId: game1_s1.id,
        playerId: player3.id,
        point: -30,
      },
      {
        gameId: game2_s1.id,
        playerId: player1.id,
        point: -10,
      },
      {
        gameId: game2_s1.id,
        playerId: player2.id,
        point: 40,
      },
      {
        gameId: game2_s1.id,
        playerId: player3.id,
        point: -30,
      },
      {
        gameId: game1_s2.id,
        playerId: player1.id,
        point: 100,
      },
      {
        gameId: game1_s2.id,
        playerId: player2.id,
        point: -100,
      },
    ],
  });
  console.log("Created game results.");

  // SectionResultデータを作成
  await prisma.sectionResult.createMany({
    data: [
      {
        sectionId: section1.id,
        playerId: player1.id,
        point: 1020, // 1000 + 50 - 10 = 1040 (例として適当な値を設定)
      },
      {
        sectionId: section1.id,
        playerId: player2.id,
        point: 980, // 1000 - 20 + 40 = 1020
      },
      {
        sectionId: section1.id,
        playerId: player3.id,
        point: 940, // 1000 - 30 - 30 = 940
      },
      {
        sectionId: section2.id,
        playerId: player1.id,
        point: 2100, // 2000 + 100 = 2100
      },
      {
        sectionId: section2.id,
        playerId: player2.id,
        point: 1900, // 2000 - 100 = 1900
      },
    ],
  });
  console.log("Created section results.");

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
