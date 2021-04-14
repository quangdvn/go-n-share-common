import { Location } from '../constants/enum';

export interface TripData {
  id: number;
  departureDate: string;
  departureTime: number;
  departureLocation: Location;
  arriveDate: string;
  arriveTime: number;
  arriveLocation: Location;
  coachId: number;
  driverId: number;
}

export interface TripCreatedEvent {
  tripData: TripData[];
}
