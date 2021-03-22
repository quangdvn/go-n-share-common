import { StaffRoles, WorkingStatus } from '../constants/enum';
export interface StaffCreatedEvent {
    id: number;
    fullname: string;
    username: string;
    phone: string;
    role: StaffRoles;
    workingStatus: WorkingStatus;
}
//# sourceMappingURL=staff-created-event.d.ts.map