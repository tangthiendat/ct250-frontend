export interface ApiResponse<T> {
  payload?: T;
  error?: string;
  message?: string;
  status: number;
}
