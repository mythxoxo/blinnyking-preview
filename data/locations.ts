export const BOLT_URL = 'https://food.bolt.eu/et-ee/1-tallinn/p/156042-blinny-king/';
export const WOLT_URL = 'https://wolt.com/en/est/tallinn/restaurant/blinny-king';

export const locations = [
  {
    id: 'juri',
    nameKey: 'location.juri',
    address: 'Veetorni tn 9, Jüri',
    phone: '+372 5685 9075',
    hours: {
      weekdays: '10:00–20:00',
      sat: '11:00–20:00',
      sun: '11:00–19:00'
    },
    boltUrl: BOLT_URL,
    woltUrl: WOLT_URL,
    active: true
  }
] as const;

export type LocationItem = (typeof locations)[number];
