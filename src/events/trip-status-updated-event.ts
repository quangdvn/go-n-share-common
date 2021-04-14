import { TripStatus } from '../constants/enum';

export interface TripStatusUpdatedEvent {
  driverId: number;
  tripId: number;
  status: TripStatus;
}
