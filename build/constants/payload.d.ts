import { AuthRoles, WorkingStatus, StaffRoles, DriverRoles } from './enum';
export interface JwtPayload {
    auth: AuthRoles;
    data: {
        id: string;
        workingStatus: WorkingStatus;
        role: StaffRoles | DriverRoles;
    };
}
//# sourceMappingURL=payload.d.ts.map