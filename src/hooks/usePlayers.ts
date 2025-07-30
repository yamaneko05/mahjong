import { useEffect, useState } from "react";
import { getPlayers } from "@/app/actions";
import { Player } from "@/generated/prisma";

/**
 * サーバーからプレイヤーリストを取得するカスタムフック
 * @returns {Player[]} プレイヤーの配列
 */
export function usePlayers(): Player[] {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const fetchedPlayers = await getPlayers();
      setPlayers(fetchedPlayers);
    };
    fetchPlayers();
  }, []);

  return players;
}
