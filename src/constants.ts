import { IVendor, Province, ItemType } from './graphql-types'
import url from 'url'
export const QUEUE_NAME = 'SCRAPE_QUEUE'

export const VENDORS = [
  {
    name: `Cabela's`,
    link: 'http://www.cabelas.ca/',
    logo: '/logos/cabelas-logo.png',
    provinces: [
      Province.BC,
      Province.AB,
      Province.SK,
      Province.MB,
      Province.ON,
    ],
    location: 'all over the place',
  } as IVendor,
  {
    name: 'Sail',
    link: 'https://www.sail.ca/',
    logo: '/logos/sail-logo.png',
    provinces: [Province.ON, Province.QC],
    location: 'all over the place',
  },
  {
    name: 'Firearms Outlet Canada',
    link: 'http://www.firearmsoutletcanada.com/',
    logo: '/logos/foc-logo.jpg',
    provinces: [Province.ON],
    location: 'Ajax',
  },
  {
    name: `Al Flaherty's`,
    link: 'https://www.alflahertys.com/',
    logo: '/logos/al-flahertys-logo.png',
    provinces: [Province.ON],
    location: 'Toronto',
  },
  {
    name: 'Bulls Eye London',
    link: 'http://www.bullseyelondon.com/',
    logo: '/logos/bulls-logo.png',
    provinces: [Province.ON],
    location: 'London',
  },
  {
    name: 'Canadian Tire',
    link: 'http://www.canadiantire.ca/en/sports-rec/hunting/ammunition.html',
    logo: '/logos/canadian-tire-logo.png',
    provinces: [
      Province.YT,
      Province.NT,
      Province.BC,
      Province.AB,
      Province.SK,
      Province.MB,
      Province.ON,
      Province.QC,
      Province.NB,
      Province.PE,
      Province.NS,
      Province.NL,
    ],
    location: 'all over the place',
  },
  {
    name: 'Reliable Gun',
    link: 'https://www.reliablegun.com/',
    logo: '/logos/reliable-gun-logo.jpg',
    provinces: [Province.BC],
    location: 'Vancover',
  },
  {
    name: 'Tenda',
    link: 'https://www.gotenda.com/',
    logo: '/logos/tenda-logo.png',
    provinces: [Province.ON],
    location: 'Richmond Hill',
  },
  {
    name: 'Canada Ammo',
    link: 'https://www.canadaammo.com/',
    logo: '/logos/canada-ammo-logo.jpg',
    provinces: [Province.BC, Province.ON],
    location: 'all over the place',
  },
  {
    name: 'Wolverine Supplies',
    link: 'https://www.wolverinesupplies.com/',
    logo: '/logos/wolverine-logo.png',
    provinces: [Province.MB],
    location: 'Virden',
  },
  {
    name: 'Jo Brook Outdoors',
    link: 'https://www.jobrookoutdoors.com/',
    logo: '/logos/jo-brook-logo.png',
    provinces: [Province.MB],
    location: 'Brandon',
  },
  {
    name: 'The Ammo Source',
    link: 'http://www.theammosource.com/',
    logo: '/logos/the-ammo-source-logo.png',
    provinces: [Province.ON],
    location: 'Harrowsmith',
  },
  {
    name: 'Hirsch Precision',
    link: 'http://www.hirschprecision.com/',
    logo: '/logos/hirsch-logo.png',
    provinces: [Province.NS],
    location: 'Lake Echo',
  },
  {
    name: 'Wild West',
    link: 'https://gun-shop.ca/',
    logo: '/logos/wild.png',
    provinces: [Province.AB],
    location: 'Edmonton',
  },
  {
    name: 'Tiger Arms',
    link: 'http://www.tigerarms.ca/',
    logo: '/logos/tigerarms.png',
    provinces: [Province.BC],
    location: 'Port Coquitlam',
    background: true,
  },
  {
    name: 'Mag Dump',
    link: 'https://magdump.ca/',
    logo: '/logos/magdump-logo.png',
    provinces: [Province.AB],
    location: 'Sherwood Park',
  },
  {
    name: 'Rangeview Sports',
    // link: 'https://www.rangeviewcanada.com/',
    link: 'https://www.rangeviewsports.ca/',
    logo: '/logos/rangeview-sports.png',
    provinces: [Province.ON],
    location: 'Newmarket',
  },
  {
    name: 'Trade Ex Canada',
    link: 'https://www.tradeexcanada.com/',
    logo: '/logos/tradex-logo.png',
    provinces: [Province.ON],
    location: 'Hawkesburry',
  },
  {
    name: 'Frontier Firearms',
    link: 'http://frontierfirearms.ca/',
    logo: '/logos/frontierfirearms-logo.png',
    provinces: [Province.SK],
    location: 'Prince Albert',
  },
  {
    name: 'BV Outdoor Essentials',
    link: 'https://www.bvoutdoors.com/',
    logo: '/logos/bvoutdoors-logo.png',
    provinces: [Province.BC],
    location: 'Smithers',
  },
  {
    name: 'NAS Guns & Ammo',
    link: 'https://www.nasgunsandammo.com/',
    logo: '/logos/nas-logo.jpg',
    provinces: [Province.ON],
    location: 'Niagara and Sault Ste. Marie',
  },
  {
    name: 'Dante Sports',
    link: 'https://www.dantesports.com/en/',
    logo: '/logos/dante-logo.png',
    provinces: [Province.QC],
    location: 'Montréal',
  },
  {
    name: 'Lever Arms',
    link: 'https://www.leverarms.com/',
    logo: '/logos/leverarms-logo.png',
    provinces: [Province.BC],
    location: 'Vancouver',
  },
  {
    name: 'Calgary Shooting Center',
    link: 'https://store.theshootingcentre.com/',
    logo: '/logos/shooting-center-logo.jpg',
    provinces: [Province.AB],
    location: 'Calgary',
  },
  {
    name: 'Western Metal',
    link: 'https://www.westernmetal.ca/shooting',
    logo: '/logos/westernmetal-logo.png',
    provinces: [Province.AB],
    location: 'somewhere',
  },
  {
    name: 'Al Simmons',
    link: 'https://alsimmonsgunshop.com/',
    logo: '/logos/al-simmons-logo.jpg',
    provinces: [Province.ON],
    location: 'Hamilton',
  },
  {
    name: 'Vancouver Gun Store',
    link: 'https://vancouvergunstore.ca/',
    logo: '/logos/vancouvergunstore-logo.png',
    provinces: [Province.BC],
    location: 'Vancouver',
  },
  {
    name: 'Bartons Big Country',
    link: 'https://www.bartonsbigcountry.ca/',
    logo: '/logos/logo-bartons.png',
    provinces: [Province.AB],
    location: 'Grande Prairie',
  },
  {
    name: 'The Shooting Edge',
    link: 'https://theshootingedge.com/',
    logo: '/logos/shootingedge-logo.png',
    provinces: [Province.AB],
    location: 'Calgary',
  },
  {
    name: 'Lanz Shooting Supplies',
    link: 'http://www.lanzshootingsupplies.com/',
    logo: '/logos/lanz-logo.png',
    provinces: [Province.ON],
    location: 'St Ann',
  },
  {
    name: 'Durham Outdoors',
    link: 'https://durhamoutdoors.ca/',
    logo: '/logos/duram-logo.png',
    provinces: [Province.ON],
    location: 'Orono',
  },
  {
    name: 'Soley Outdoors',
    link: 'https://www.solelyoutdoors.com/',
    logo: '/logos/soley-logo.png',
    provinces: [Province.ON],
    location: 'Markham',
  },
  {
    name: 'North Pro Sports',
    link: 'http://northprosports.com/',
    logo: '/logos/northpro-logo.png',
    provinces: [Province.SK],
    location: 'Saskatoon',
    background: true,
  },
  {
    name: 'Wanstalls',
    link: 'https://www.wanstallsonline.com/',
    logo: '/logos/wanstalls.png',
    provinces: [Province.BC],
    location: 'Maple Ridge',
  },
  {
    name: 'Gothic Line Armoury',
    link: 'https://gothiclinearmoury.ca/',
    logo: '/logos/gothic-line-armoury.jpg',
    provinces: [Province.AB],
    location: 'Calagary',
  },
  {
    name: 'Rampart',
    link: 'https://rampartcorp.com/',
    logo: '/logos/rampart.png',
    provinces: [Province.ON],
    location: 'Ottawa',
    background: true,
  },
  {
    name: 'West Coast Hunting Supplies',
    link: 'https://www.westcoasthunting.ca',
    logo: '/logos/westcoasthunting-logo.png',
    provinces: [Province.BC],
    location: 'Richmond',
  },
  {
    name: 'Siwash Sports',
    link: 'https://www.siwashsports.ca/',
    logo: '/logos/siwash-sports-logo.png',
    provinces: [Province.BC],
    location: 'Chilliwack',
  },
  {
    name: 'Tillsonburg Gun Shop',
    link: 'https://tillsonburggunshop.com/',
    logo: '/logos/tillsonburg-logo.png',
    provinces: [Province.ON],
    location: 'Tillsonburg',
  },
  {
    name: 'CRAFM',
    link: 'https://www.crafm.com/',
    logo: '/logos/crafm-logo.png',
    provinces: [Province.QC],
    location: 'Montréal',
  },
  {
    name: 'Northern Elite Firearms',
    link: 'https://www.northernelitefirearms.ca/',
    logo: '/logos/northern-elite-firearms-logo.png',
    provinces: [Province.SK],
    location: 'Prince Albert',
  },
  {
    name: 'Canadian GunHub',
    link: 'https://gun-hub.mybigcommerce.com/',
    logo: '/logos/canadian-gunhub-logo.png',
    provinces: [Province.AB],
    location: 'Dunmore',
  },
  {
    name: 'Budget Shooter Supply',
    link: 'https://www.budgetshootersupply.ca',
    logo: '/logos/budgetshootersupply-logo.png',
    provinces: [Province.BC],
    location: 'Surrey',
  },
  {
    name: 'Rusty Wood',
    link: 'https://www.rustywood.ca',
    logo: '/logos/rustywood-logo.png',
    provinces: [Province.BC],
    location: 'Mission',
  },
  {
    name: 'The Gun Dealer',
    link: 'https://thegundealer.net',
    logo: '/logos/thegundealer-logo.png',
    provinces: [Province.NB],
    location: 'McAdam',
  },
  {
    name: 'WASP Munitions',
    link: 'https://waspmunitions.ca',
    logo: '/logos/waspmunitions-logo.png',
    provinces: [Province.AB],
    location: 'Sylvan Lake',
  },
  {
    name: 'Great North Precision',
    link: 'https://greatnorthprecision.com',
    logo: '/logos/greatnorthprecision-logo.png',
    provinces: [Province.BC],
    location: 'Kelowna',
  },
  {
    name: 'Tesro',
    link: 'https://tesro.ca',
    logo: '/logos/tesro-logo.png',
    provinces: [Province.ON],
    location: 'Ottawa',
  },
  {
    name: 'Xmetal Targets',
    link: 'https://xmetaltargets.com',
    logo: '/logos/xmetaltargets-logo.png',
    provinces: [Province.QC],
    location: `L'Isle-Verte`,
  },
  {
    name: 'Triggers & Bows',
    link: 'https://www.triggersandbows.com',
    logo: '/logos/triggers&bows-logo.png',
    provinces: [Province.ON],
    location: 'Burford',
    background: true,
  },
  {
    name: 'G4C',
    link: 'https://g4cgunstore.com',
    logo: '/logos/g4c-logo.png',
    provinces: [Province.ON],
    location: `Markham`,
  },
]

// list of domain names of all vendors (with www omitted)
/**
 * name of vendors (as shown to user)
 */
export const VENDOR_NAMES = VENDORS.map(v => v.name)

/**
 * domains of all vendors
 */
export const SOURCES = VENDORS.map(v =>
  url.parse(v.link).hostname.replace('www.', '')
)

export const PROXY_URL = 'https://ammobin.ca/images'
export const DATE_FORMAT = 'YYYY-MM-DD'
export const CACHE_REFRESH_HOURS = 4

export const RENDERTRON_URL = 'http://rendertron:3000'

export const AMMO_TYPES: ItemType[] = [
  ItemType.centerfire,
  ItemType.rimfire,
  ItemType.shotgun,
]
export const RELOAD_TYPES: ItemType[] = [
  ItemType.case,
  ItemType.powder,
  ItemType.primer,
  ItemType.shot,
]

export const TYPES: ItemType[] = [...AMMO_TYPES, ...RELOAD_TYPES]
