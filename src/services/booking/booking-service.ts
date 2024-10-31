import { AxiosInstance } from "axios";
import { ApiResponse, IBooking } from "../../interfaces";
import { createApiClient } from "../api-client";

interface IBookingService {
  createBooking(
    booking: Omit<IBooking, "bookingId">,
  ): Promise<ApiResponse<IBooking>>;
}

const apiClient: AxiosInstance = createApiClient("bookings", { auth: false });

class BookingService implements IBookingService {
  async createBooking(
    booking: Omit<IBooking, "bookingId">,
  ): Promise<ApiResponse<IBooking>> {
    return (await apiClient.post("", booking)).data;
  }
}

export const bookingService = new BookingService();
