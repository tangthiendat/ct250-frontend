export enum TicketClassName {
  ECONOMY = "ECONOMY",
  BUSINESS = "BUSINESS",
}

export enum RouteType {
  DOMESTIC = "DOMESTIC",
  INTERNATIONAL = "INTERNATIONAL",
}

export enum TripType {
  ONE_WAY = "ONE_WAY",
  ROUND_TRIP = "ROUND_TRIP",
}

export enum FeeType {
  ADMIN_SURCHARGE = "ADMIN SURCHARGE",
  SECURITY_SCREENING = "SECURITY SCREENING",
  BASIC_FARE = "BASIC FARE",
}

export enum PassengerType {
  ADULT = "ADULT",
  CHILD = "CHILD",
  INFANT = "INFANT",
}

export enum PassengerGender {
  FEMALE = "FEMALE",
  MALE = "MALE",
}

export enum PassengerTitle {
  MR = "Ông",
  MR_valueOf = "Mr",
  MRS = "Bà",
  MRS_valueOf = "Mrs",
  MS = "Cô",
  MS_valueOf = "Ms",
  MSTR = "Bé trai",
  MSTR_valueOf = "Mstr",
  MISS = "Bé gái",
  MISS_valueOf = "Miss",
}
export enum BookingStatus {
  INIT = "INIT", // ĐẶT CHỖ ĐANG TRONG QUÁ TRÌNH XỬ LÝ, CHƯA HOÀN TẤT
  PENDING = "PENDING", // ĐẶT CHỖ ĐANG TRONG QUÁ TRÌNH XỬ LÝ, CHƯA HOÀN TẤT
  CONFIRMED = "CONFIRM", // ĐẶT CHỖ ĐÃ ĐƯỢC XÁC NHẬN
  CANCELLED = "CANCELLED", // ĐẶT CHỖ ĐÃ BỊ HỦY
  COMPLETED = "COMPLETED", // ĐẶT CHỖ ĐÃ HOÀN TẤT
  REFUNDED = "REFUNDED", // ĐẶT CHỖ ĐÃ ĐƯỢC HOÀN TIỀN
  RESERVED = "RESERVED", // ĐẶT CHỖ ĐANG TRONG QUÁ TRÌNH XỬ LÝ, CHƯA HOÀN TẤT
  PAID = "PAID", // ĐẶT CHỖ ĐÃ ĐƯỢC THANH TOÁN
}

export enum TransactionType {
  PAYMENT = "PAYMENT",
  REFUND = "REFUND",
  CANCEL = "CANCEL",
}

export enum TransactionStatus {
  COMPLETED = "COMPLETED",
  PENDING = "PENDING",
  FAILED = "FAILED",
}
