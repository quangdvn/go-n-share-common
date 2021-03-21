import { AuthRoles, WorkingStatus } from '../constants/enum';

export interface StaffCreatedEvent {
  id: number;
  fullname: string;
  username: string;
  phone: string;
  role: AuthRoles;
  workingStatus: WorkingStatus;
}
