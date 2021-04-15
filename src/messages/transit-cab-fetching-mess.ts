import { Location, TripShift } from '../constants/enum';

export interface TransitCabFetchingMess {
  location: Location;
  date: string;
  shift: TripShift;
}
