import { AxiosInstance } from "axios";
import { ApiResponse, ICoupon } from "../../interfaces";
import { createApiClient } from "../api-client";

interface ICouponService {
  getCouponByCode(code: string): Promise<ApiResponse<ICoupon>>;
}

const apiClient: AxiosInstance = createApiClient("coupons", { auth: false });

class CouponService implements ICouponService {
  async getCouponByCode(code: string): Promise<ApiResponse<ICoupon>> {
    return (await apiClient.get(`/${code}`)).data;
  }
}

export const couponService = new CouponService();
