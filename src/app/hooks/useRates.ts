import { Rate } from "@/generated/prisma";
import { useQuery } from "@tanstack/react-query";
import { getRates } from "../actions";

export function useRates() {
  const { data } = useQuery<Rate[]>({
    queryKey: ["rates"],
    queryFn: async () => await getRates(),
  });

  return data;
}
