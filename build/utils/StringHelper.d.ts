export declare function wait(timeout: number): Promise<any>;
export declare function socketParse(params: string): {
    headers: any;
    body: {};
};
export declare function validateField(schema: any, field: string, value: string): string;
export declare function formatNumberDisplay(num?: number, decimals?: number, convertToAbbreviation?: boolean): string;
export declare const formatCurrency: (number: number, { decimals, delimiter, intOnly, isRound }?: {
    decimals?: number | undefined;
    delimiter?: string | undefined;
    intOnly?: boolean | undefined;
    isRound?: boolean | undefined;
}) => string;
export declare function parseCandlestick(candlestick: any): {
    time: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    quoteVolume: number;
    buyVolume: number;
    sellVolume: number;
};
export declare function displayDate(dateString: string): string;
export declare function displayTime(dateString: string): string;
export declare function ignoreErrorVirtualList(): void;
export declare function capitalize(str: string): string;
export declare const roundNumber: (money?: number, precision?: number, isRoundDown?: boolean, range?: number) => number;
export declare function replaceLastComma(str: string): string;
//# sourceMappingURL=StringHelper.d.ts.map