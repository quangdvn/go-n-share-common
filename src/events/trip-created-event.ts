export interface TripData {
  id: number;
  departureDate: string;
  departureTime: number;
  arriveDate: string;
  arriveTime: number;
  coachId: number;
  driverId: number;
}

export interface TripCreatedEvent {
  tripData: TripData[];
}
