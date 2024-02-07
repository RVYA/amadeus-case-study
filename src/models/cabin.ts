enum Amenity {
  AdvancedTechnologies = "advancedTechnologies",
  AmenityKits = "amenityKits",
  BusinessClassLounge = "businessClassLounge",
  CabinAmbiance = "cabinAmbiance",
  DiningServices = "diningServices",
  EntertainmentOptions = "entertainmentOptions",
  LoungeAccess = "loungeAccess",
  PowerOutlets = "powerOutlets",
  PremiumEconomyAmenities = "premiumEconomyAmenities",
  PriorityBoarding = "priorityBoarding",
  QuietZone = "quietZone",
  SeatComfort = "seatComfort",
  WiFiAvailability = "wifiAvailability",
}

interface Price {
  currency: string
  amount: number
}

export enum CabinClass {
  Economy = "economy",
  PremiumEconomy = "premiumEconomy",
  Business = "business",
  FirstClass = "firstClass",
}

interface BaggageAllowance {
  carryOn: string
  checked: string
}

interface Seat {
  seatNumber: string
  status: SeatStatus
}

enum SeatStatus {
  Available = "available",
  Booked = "booked",
  Reserved = "reserved",
}

export interface Cabin {
  amenities: Amenity[]
  baggageAllowance: BaggageAllowance
  cabinClass: CabinClass
  legroom: string
  price: Price
  //seats: Seat[]
}
