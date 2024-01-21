interface Address {
  street?: string
  city?: string
  state?: string
  zipCode?: string
  country?: string
}

interface Contact {
  phone: string
  email: string
  website: string
  address?: Address
}

export interface Airline {
  iataCode: string
  //contact: Contact
  logoUrl?: string
  name: string
  //services?: string[]
  //socialMedia?: SocialMediaLinks
}
