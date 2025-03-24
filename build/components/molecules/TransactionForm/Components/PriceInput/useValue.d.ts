interface UseValueProps<ValueType, FormattedType = ValueType> {
    value?: ValueType;
    onChange?: (value: ValueType) => void;
    size: number;
    getFormattedValue?: (value: ValueType, size: number) => FormattedType;
    getUnformattedValue?: (value: FormattedType) => ValueType;
    isValid?: (value: ValueType) => boolean;
    isFormattedPartially?: (value: FormattedType) => boolean;
}
declare function useValue<ValueType, FormattedType = ValueType>({ value, onChange, size, getFormattedValue, getUnformattedValue, isValid, isFormattedPartially, }: UseValueProps<ValueType, FormattedType>): {
    formattedValue: FormattedType | undefined;
    onChangeValue: (newValue: FormattedType) => void;
};
export default useValue;
//# sourceMappingURL=useValue.d.ts.map