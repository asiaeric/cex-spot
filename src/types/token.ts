import { z } from "zod";

import { InHouseTokenSchema, PartnerTokenSchema } from "@/schemas";

type InHouseToken = z.infer<typeof InHouseTokenSchema>;

type PartnerToken = z.infer<typeof PartnerTokenSchema>;

export { InHouseToken, PartnerToken };
