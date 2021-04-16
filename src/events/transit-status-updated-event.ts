import { TripStatus } from '../constants/enum';

export interface TransitStatusUpdatedEvent {
  driverId: number;
  transitId: number;
  status: TripStatus;
}
