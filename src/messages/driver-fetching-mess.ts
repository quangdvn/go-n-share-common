import { TripShift } from '../constants/enum';

export interface DriverFetchingMess {
  id: number;
  shift: TripShift;
  departureDate: string;
}
