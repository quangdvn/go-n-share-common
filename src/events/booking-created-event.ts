import { BookingStatus, PaymentMethod } from '../constants/enum';

export interface BookingCreatedEvent {
  id: number;
  tripId: string;
  bookingName: string;
  bookingMail: string;
  bookingPhone: string;
  totalPrice: number;
  hasTransit: boolean;
  transitDetailId: number;
  notes: string;
  isVerify: boolean;
  bookingStatus: BookingStatus;
  paymentMethod: PaymentMethod;
  transitDetail: {
    address: string;
    latitude: string;
    longitude: string;
    notes: string;
  };
}
