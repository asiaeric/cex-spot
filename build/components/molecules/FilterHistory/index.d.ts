import { ViewStyle } from "react-native";
import { FilterDate } from "../../../types";
interface AggregationSelectionType {
    customStyle?: ViewStyle | ViewStyle[];
    onFilterChange: ({ startDate, endDate }: FilterDate) => void;
    filters: FilterDate;
}
declare function FilterHistory({ filters, customStyle, onFilterChange, }: AggregationSelectionType): import("react/jsx-runtime").JSX.Element;
export default FilterHistory;
//# sourceMappingURL=index.d.ts.map