import { TripShift } from '../constants/enum';

export interface CoachFetchingMess {
  id: number;
  shift: TripShift;
  departureDate: string;
}
