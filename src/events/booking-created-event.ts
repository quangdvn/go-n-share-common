import { BookingStatus, PaymentMethod } from '../constants/enum';

export interface BookingCreatedEvent {
  id: number;
  tripId: string;
  bookingName: string;
  bookingPhone: string;
  bookingStatus: BookingStatus;
  paymentMethod: PaymentMethod;
  transitDetail: {
    address: string;
    latitude: string;
    longitude: string;
    notes: string;
  };
}
