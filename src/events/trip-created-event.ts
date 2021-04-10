export interface TripCreatedEvent {
  id: number;
  departureDate: string;
  departureTime: number;
  arriveDate: string;
  arriveTime: number;
  coachId: number;
  driverId: number;
}
