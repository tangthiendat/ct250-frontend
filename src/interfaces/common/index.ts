export interface ApiResponse<T> {
    data(data: any): unknown;
    payload?: T;
    error?: string;
    message?: string;
    status: number;
}