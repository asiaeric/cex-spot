declare function orderBookTopic(currentSymbol: string, depth: number): string;
declare function tradeMarket(code: string): string;
declare function chartTopic({ code, interval, }: {
    code: string;
    interval: string;
}): string;
declare function statistic(code: string): string;
declare function userOrders(): string;
declare function userLogin(jwt: string): string;
declare const TopicHelper: {
    orderBookTopic: typeof orderBookTopic;
    chartTopic: typeof chartTopic;
    statistic: typeof statistic;
    tradeMarket: typeof tradeMarket;
    userOrders: typeof userOrders;
    userLogin: typeof userLogin;
};
export default TopicHelper;
//# sourceMappingURL=topic.d.ts.map