import { z } from "zod";
import { StatisticSchema } from "@/schemas";
type Statistic = z.infer<typeof StatisticSchema>;
export { Statistic };
//# sourceMappingURL=statistic.d.ts.map