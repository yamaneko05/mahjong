import { Player } from "@/generated/prisma";
import {
  getPlayers,
  createPlayer,
  updatePlayer,
  deletePlayer,
} from "../actions";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { PlayerFormInput } from "@/schemas/playerForm";

export function usePlayers() {
  const { data } = useQuery<Player[]>({
    queryKey: ["players"],
    queryFn: async () => await getPlayers(),
  });

  return data;
}

export function useCreatePlayer() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createPlayer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["players"] });
    },
  });

  return mutation;
}

export function useUpdatePlayer() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: PlayerFormInput }) =>
      updatePlayer(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["players"] });
    },
  });

  return mutation;
}

export function useDeletePlayer() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deletePlayer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["players"] });
    },
  });

  return mutation;
}
