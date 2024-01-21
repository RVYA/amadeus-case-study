import { Aircraft } from "./aircraft"
import { Airline } from "./airline"
import { Cabin } from "./cabin"

interface Layover {
  airport: string
  city: string
  arrivalDateTime: string
  departureDateTime: string
  willChangeAircraft: boolean
  nextAirline?: Airline
  nextFlightNumber?: string
  nextAircraft?: Aircraft
}

export interface Flight {
  flightNumber: string
  airline: Airline
  departureAirport: string
  departureCity: string
  departureDateTime: string
  arrivalAirport: string
  arrivalCity: string
  arrivalDateTime: string
  duration: string
  seatsAvailable: number
  aircraft: Aircraft
  layovers: Layover[]
  cabins: Cabin[]
}
