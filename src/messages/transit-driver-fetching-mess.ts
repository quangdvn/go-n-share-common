import { Location, TripShift } from '../constants/enum';

export interface TransitDriverFetchingMess {
  location: Location;
  date: string;
  shift: TripShift;
}
