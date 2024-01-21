import { CabinClass } from "./cabin"

type Capacity = { [C in CabinClass]?: number }

/**
 * A representation of common information on aircraft.
 *
 * @prop capacity - Capacity for a given cabin class
 * @prop manufacturer - Identifies the company that manufactured the aircraft
 * (e.g., "Boeing")
 * @prop model - Represents the specific model or variant of the aircraft
 * (e.g., "747-400")
 * @prop type - Typically corresponds to the IATA code and serves as a
 * standardized identifier for the aircraft type
 * (e.g., "B744" for Boeing 747-400).
 */
export interface Aircraft {
  capacity: Capacity
  manufacturer: string
  model: string
  type: string
}
