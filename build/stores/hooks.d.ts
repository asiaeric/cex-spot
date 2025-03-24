import { Model } from "./models";
declare const useStoreState: <Result>(mapState: (state: import("easy-peasy").StateMapper<import("easy-peasy").FilterActionTypes<Model>>) => Result, equalityFn?: ((prev: Result, next: Result) => boolean) | undefined) => Result, useStoreActions: <Result>(mapActions: (actions: import("easy-peasy").Actions<Model>) => Result) => Result;
export { useStoreState, useStoreActions };
//# sourceMappingURL=hooks.d.ts.map