import { AxiosInstance } from "axios";
import { ApiResponse, ITransaction } from "../../interfaces";
import { createApiClient } from "../api-client";

interface ITransactionService {
  createTransaction: (
    transaction: Omit<ITransaction, "status" | "amount">,
  ) => Promise<ApiResponse<ITransaction>>;
}

const apiClient: AxiosInstance = createApiClient("transactions", {
  auth: false,
});

class TransactionService implements ITransactionService {
  async createTransaction(
    transaction: Omit<ITransaction, "status" | "amount">,
  ): Promise<ApiResponse<ITransaction>> {
    return (await apiClient.post("", transaction)).data;
  }
}

export const transactionService = new TransactionService();
