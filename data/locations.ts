export const BOLT_URL = 'https://food.bolt.eu/et-ee/1-tallinn/p/156042-blinny-king/';
export const WOLT_URL = 'https://wolt.com/en/est/tallinn/restaurant/blinny-king';

export interface Location {
  id: string;
  nameKey: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  mapEmbedUrl: string;
  isActive: boolean;
  isComingSoon?: boolean;
  boltUrl: string;
  woltUrl: string;
}

export const locations: Location[] = [
  {
    id: 'juri',
    nameKey: 'locationsPage.juriName',
    address: 'Veetorni tn 9',
    city: 'Jüri, Estonia, 75301',
    phone: '+372 5685 9075',
    email: 'info@blinnyking.ee',
    hours: {
      weekdays: 'E-R 10:00–20:00',
      saturday: 'L 11:00–20:00',
      sunday: 'P 11:00–19:00'
    },
    mapEmbedUrl: 'https://www.google.com/maps?q=Veetorni%20tn%209%2C%20J%C3%BCri&z=15&output=embed',
    isActive: true,
    boltUrl: BOLT_URL,
    woltUrl: WOLT_URL
  }
];
