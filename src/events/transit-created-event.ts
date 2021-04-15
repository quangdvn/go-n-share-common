import { Location, TripShift } from '../constants/enum';

export interface TransitData {
  id: number;
  tripId: number;
  cabId: number;
  driverId: number;
  departureDate: string;
  departureShift: TripShift;
  departureLocation: Location;
}

export interface TransitCreatedEvent {
  transitData: TransitData[];
}
