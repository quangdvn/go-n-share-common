import { BookingStatus, Location, TripShift } from '../constants/enum';

export interface TransitDetailCreatingMess {
  bookingId: number;
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