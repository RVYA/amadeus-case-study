enum Amenity {
  AdvancedTechnologies = "advanced-technologies",
  AmenityKits = "amenity-kits",
  BusinessClassLounge = "business-class-lounge",
  CabinAmbiance = "cabin-ambiance",
  DiningServices = "dining-services",
  EntertainmentOptions = "entertainment-options",
  LoungeAccess = "lounge-access",
  PowerOutlets = "power-outlets",
  PremiumEconomyAmenities = "premium-economy-amenities",
  PriorityBoarding = "priority-boarding",
  QuietZone = "quiet-zone",
  SeatComfort = "seat-comfort",
  WiFiAvailability = "wifi-availability",
}

interface Price {
  currency: string
  amount: number
}

export enum CabinClass {
  Economy = "economy",
  PremiumEconomy = "premium-economy",
  Business = "business",
  FirstClass = "first-class",
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
