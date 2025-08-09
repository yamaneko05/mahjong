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
      name: "ノーレート",
      rate: 0,
    },
  });
  const rate2 = await prisma.rate.create({
    data: {
      name: "1/20(テンゴ)",
      rate: 1 / 20,
    },
  });
  const rate3 = await prisma.rate.create({
    data: {
      name: "1/10(テンピン)",
      rate: 1 / 10,
    },
  });
  const rate4 = await prisma.rate.create({
    data: {
      name: "1/5(テンリャンピン)",
      rate: 1 / 5,
    },
  });
  console.log("Created rates.");

  const player1 = await prisma.player.create({
    data: {
      name: "えいご",
    },
  });
  const player2 = await prisma.player.create({
    data: {
      name: "おうた",
    },
  });
  const player3 = await prisma.player.create({
    data: {
      name: "かいと",
    },
  });
  const player4 = await prisma.player.create({
    data: {
      name: "きむら",
    },
  });
  const player5 = await prisma.player.create({
    data: {
      name: "だいち",
    },
  });
  console.log("Created players.");

  // Sectionデータを作成
  const section1 = await prisma.section.create({
    data: {
      date: new Date("2025-06-28"),
      startingPoints: 25000,
      rateId: rate1.id,
      players: {
        connect: [
          { id: player1.id },
          { id: player2.id },
          { id: player3.id },
          { id: player4.id },
        ],
      },
    },
  });
  const section2 = await prisma.section.create({
    data: {
      date: new Date("2025-06-25"),
      startingPoints: 25000,
      rateId: rate2.id,
      players: {
        connect: [
          { id: player2.id },
          { id: player3.id },
          { id: player4.id },
          { id: player5.id },
        ],
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
        point: 25000,
      },
      {
        gameId: game1_s1.id,
        playerId: player2.id,
        point: 25000,
      },
      {
        gameId: game1_s1.id,
        playerId: player3.id,
        point: 25000,
      },
      {
        gameId: game1_s1.id,
        playerId: player4.id,
        point: 25000,
      },
      {
        gameId: game2_s1.id,
        playerId: player1.id,
        point: 25000,
      },
      {
        gameId: game2_s1.id,
        playerId: player2.id,
        point: 25000,
      },
      {
        gameId: game2_s1.id,
        playerId: player3.id,
        point: 25000,
      },
      {
        gameId: game2_s1.id,
        playerId: player4.id,
        point: 26000,
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
        result: 5650,
      },
      {
        sectionId: section1.id,
        playerId: player2.id,
        result: 230,
      },
      {
        sectionId: section1.id,
        playerId: player3.id,
        result: -1920,
      },
      {
        sectionId: section1.id,
        playerId: player4.id,
        result: 3960,
      },
      {
        sectionId: section2.id,
        playerId: player2.id,
        result: 1610,
      },
      {
        sectionId: section2.id,
        playerId: player3.id,
        result: 390,
      },
      {
        sectionId: section2.id,
        playerId: player4.id,
        result: 230,
      },
      {
        sectionId: section2.id,
        playerId: player5.id,
        result: -2230,
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
