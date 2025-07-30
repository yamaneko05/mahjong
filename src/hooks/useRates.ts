import { useEffect, useState } from "react";
import { getRates } from "@/app/actions";
import { Rate } from "@/generated/prisma";

/**
 * サーバーからレートリストを取得するカスタムフック
 * @returns {Rate[]} レートの配列
 */
export function useRates(): Rate[] {
  const [rates, setRates] = useState<Rate[]>([]);

  useEffect(() => {
    const fetchRates = async () => {
      const fetchedRates = await getRates();
      setRates(fetchedRates);
    };
    fetchRates();
  }, []);

  return rates;
}
