export enum WorkingStatus {
  WORKING = 'working',
  RESIGN = 'resign',
}

export enum StaffRoles {
  SUPERVISING = 'supervising',
  SCHEDULING = 'scheduling',
  TRACKING = 'tracking',
}

export enum DriverRoles {
  FIXED_TRIP = 'fixedTrip',
  TRANSIT_TRIP = 'transitTrip',
}

export enum AuthRoles {
  STAFF = 'staff',
  DRIVER = 'driver',
}

export enum Location {
  HANOI_SUBNAME = 'HAN',
  HOCHIMINH_SUBNAME = 'HCM',
  DANANG_SUBNAME = 'DAN',
  QUANGNINH_SUBNAME = 'QAN',

  HANOI = 'Hà Nội',
  HOCHIMINH = 'Hồ Chí Minh',
  DANANG = 'Đà Nẵng',
  QUANGNINH = 'Quảng Ninh',
}

export enum DayOfWeek {
  MONDAY = 1,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

// MONDAY = 'Thứ Hai'
// TUESDAY = 'Thứ Ba'
// WEDNESDAY = 'Thứ Tư'
// THURSDAY = 'Thứ Năm'
// FRIDAY = 'Thứ Sáu'
// SATURDAY = 'Thứ Bảy'
// SUNDAY = 'Chủ Nhật'

export enum VehicleType {
  LARGE = 'Large',
  MEDIUM = 'Medium',
  SMALL = 'Small',
}

export enum TripShift {
  MORNING = 7,
  AFTERNOON = 14,
  NIGHT = 20,
}

export enum TripStatus {
  UNCONFIRM = 'unconfirm',
  READY = 'ready',
  FULL = 'full',
  GOING = 'going',
  FINISHED = 'finished',
}

export enum PaymentMethod {
  CASH = 'cash',
  ONLINE = 'online',
}

export enum BookingStatus {
  PENDING = 'pending',
  SUCCESS = 'success',
  CANCELLED = 'cancelled',
}

export enum TransitDetailEnum {
  READY = 'ready',
  WAITING = 'waiting',
  PICKED = 'picked',
  CANCELLED = 'cancelled',
}
