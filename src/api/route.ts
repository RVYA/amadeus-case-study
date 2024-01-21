import { NextRequest, NextResponse } from "next/server"

const kPossibilityDataUnavailable = 10 / 100
function hasData() {
  return Math.random() > kPossibilityDataUnavailable
}

enum InternetSpeed {
  Slow = 1.6, // seconds
  Medium = 0.8, // seconds
  Fast = 0.1, // seconds
}

function calculateInternetSpeed() {
  const possibility = Math.random()
  if (possibility < 0.33) {
    return InternetSpeed.Medium
  } else if (possibility < 0.66) {
    return InternetSpeed.Fast
  } else {
    return InternetSpeed.Slow
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams

  // Simulate possibility of data not existing.
  if (!hasData()) {
    return new Response("No data present.", {
      status: 404,
    })
  }

  const data = (await import("./mock-data/flights.json")).default

  // Simulate the delay between request and response.
  const delay = calculateInternetSpeed() as number
  await new Promise((res) => setTimeout(res, delay))

  const departureAirport = searchParams.get("departureAirport")
  const departureCity = searchParams.get("departureCity")

  const arrivalAirport = searchParams.get("arrivalAirport")
  const arrivalCity = searchParams.get("arrivalCity")

  const dateDeparting = searchParams.get("dateDeparting")

  if (
    //departureAirport === null ||
    departureCity === null ||
    //arrivalAirport === null ||
    arrivalCity === null ||
    dateDeparting === null
  ) {
    return new Response("Bad request.", { status: 400 })
  }

  let filteredData = Object.entries(data).filter((e) => {
    const entries = e.entries
    return (
      entries["dateDeparting" as keyof typeof entries] === dateDeparting &&
      entries["departureCity" as keyof typeof entries] === departureCity &&
      entries["arrivalCity" as keyof typeof entries] === arrivalCity
    )
  })
  if (arrivalAirport !== null) {
    filteredData = filteredData.filter((e) => {
      const entries = e.entries
      return (
        entries["arrivalAirport" as keyof typeof entries] === arrivalAirport
      )
    })
  }
  if (departureAirport !== null) {
    filteredData = filteredData.filter((e) => {
      const entries = e.entries
      return (
        entries["departureAirport" as keyof typeof entries] === departureAirport
      )
    })
  }

  return NextResponse.json(filteredData, { status: 200 })
}
