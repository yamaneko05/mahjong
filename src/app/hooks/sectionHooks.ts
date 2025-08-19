import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createSection, deleteSection, getSections } from "../actions";

export function useSections() {
  const query = useQuery({
    queryKey: ["sections"],
    queryFn: getSections,
  });

  return query;
}

export function useCreateSection() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createSection,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sections"] });
    },
  });

  return mutation;
}

export function useDeleteSection() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteSection,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sections"] });
    },
  });

  return mutation;
}
