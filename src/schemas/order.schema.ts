import { z } from "zod";

export const OrderBookPairSchema = z.object({
  price: z.number(),
  amount: z.number(),
});

export const OrderBookDataSchema = z.object({
  bids: z.array(OrderBookPairSchema),
  asks: z.array(OrderBookPairSchema),
  e: z.number().optional(),
});
