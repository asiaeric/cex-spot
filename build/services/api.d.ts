export declare const fetchData: <T>(endpoint: string, params?: Record<string, any>) => Promise<T>;
export declare const postData: <T>(endpoint: string, data: object, headers?: Record<string, string>) => Promise<T>;
export declare const putData: (endpoint: string, data: object, headers?: Record<string, string>) => Promise<unknown>;
export declare const deleteData: (endpoint: string, body?: object) => Promise<unknown>;
//# sourceMappingURL=api.d.ts.map