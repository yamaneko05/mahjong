"use client";

import { usePlayers } from "@/app/hooks/playerHooks";
import PlayerCard from "./cards/PlayerCard";

export default function PlayerList() {
  const players = usePlayers();

  return (
    <div className="space-y-4">
      {players?.map((player) => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  );
}
