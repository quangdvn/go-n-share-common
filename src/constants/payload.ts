import { AuthRoles, WorkingStatus, StaffRoles, DriverRoles } from './enum';

export interface JwtPayload {
  auth: AuthRoles;
  data: {
    id: number;
    workingStatus: WorkingStatus;
    role: StaffRoles | DriverRoles;
  };
}
