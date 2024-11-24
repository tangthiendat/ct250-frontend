import { AxiosInstance } from "axios";
import { ApiResponse, IBooking } from "../../interfaces";
import { createApiClient } from "../api-client";

interface IBookingService {
  createBooking(booking: IBooking): Promise<ApiResponse<IBooking>>;
  reserveBooking(booking: IBooking): Promise<ApiResponse<IBooking>>;
  searchBookingByCode(code: string): Promise<ApiResponse<string>>;
}

const apiClient: AxiosInstance = createApiClient("bookings", { auth: false });

class BookingService implements IBookingService {
  async createBooking(booking: IBooking): Promise<ApiResponse<IBooking>> {
    return (await apiClient.post("", booking)).data;
  }

  async reserveBooking(booking: IBooking): Promise<ApiResponse<IBooking>> {
    return (await apiClient.put(`/${booking.bookingId}/reserve`, booking)).data;
  }

  async searchBookingByCode(code: string): Promise<ApiResponse<string>> {
    const response = await apiClient.get("/search", {
      params: {
        code: code !== "" ? code : undefined,
      },
      withCredentials: false,
    });

    return response.data;
  }
}

export const bookingService = new BookingService();
