import { DriverRoles, Location, WorkingStatus } from '../constants/enum';

export interface DriverCreatedEvent {
  id: number;
  fullname: string;
  username: string;
  age: number;
  phone: string;
  role: DriverRoles;
  location: Location;
  workingStatus: WorkingStatus;
}
