import { z } from "zod";

export const InHouseTokenSchema = z.object({
  token: z.string(),
  tplPartnerId: z.string(),
  tplToken: z.string(),
});

export const PartnerTokenSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
  type: z.string(),
});
