import { BookingStatus, PaymentMethod } from '../constants/enum';

export interface BookingVerifiedEvent {
  id: number;
  tripId: number;
  bookingName: string;
  bookingMail: string;
  bookingPhone: string;
  isVerify: boolean;
  isCancel: boolean;
  totalPrice: number;
  hasTransit: boolean;
  transitDetailId: number;
  notes: string;
  bookingStatus: BookingStatus;
  paymentMethod: PaymentMethod;
}
