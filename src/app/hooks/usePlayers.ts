import { Player } from "@/generated/prisma";
import { useQuery } from "@tanstack/react-query";
import { getPlayers } from "../actions";

export function usePlayers() {
  const { data } = useQuery<Player[]>({
    queryKey: ["players"],
    queryFn: async () => await getPlayers(),
  });

  return data;
}
