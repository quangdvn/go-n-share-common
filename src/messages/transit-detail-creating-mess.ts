import { BookingStatus } from '../constants/enum';

export interface TransitDetailCreatingMess {
  tripId: number;
  bookingName: string;
  bookingPhone: string;
  bookingStatus: BookingStatus;
  transitDetail: {
    address: string;
    latitude: string;
    longitude: string;
    notes: string;
  };
}
