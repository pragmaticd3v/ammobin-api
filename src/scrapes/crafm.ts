import throat from 'throat'

import * as helpers from '../helpers'
import { ItemType, IItemListing, Province } from '../graphql-types'
import { scrape, Info, Selectors } from './common'
const throttle = throat(1)

export async function crafm(type: ItemType): Promise<IItemListing[]> {
  const info: Info = {
    site: 'crafm.com',
    vendor: 'CRAFM',
    provinces: [Province.QC],
  }
  const selectors: Selectors = {
    item: '.product',
    name: '.product-info h6',
    link: '.top-product-section a',
    img: '.attachment-woocommerce_thumbnail',
    price: '.woocommerce-Price-amount',
    nextPage: '.next',
  }
  const getUrl = t => page =>
    `https://www.crafm.com/product-category/ammunition/${t}/page/${page}/`
  switch (type) {
    case ItemType.rimfire:
      return Promise.all(
        ['handgun', 'revolver-2'].map(t =>
          throttle(() => scrape(getUrl(t), info, selectors))
        )
      )
        .then(helpers.combineResults)
        .then(helpers.classifyRimfire)
    case ItemType.centerfire:
      return Promise.all(
        ['handgun', 'revolver-2', 'rifle'].map(t =>
          throttle(() => scrape(getUrl(t), info, selectors))
        )
      )
        .then(helpers.combineResults)
        .then(helpers.classifyCenterfire)
    case ItemType.shotgun:
      return scrape(getUrl('shotgun'), info, selectors).then(
        helpers.classifyShotgun
      )
    default:
      throw new Error('unknown type: ' + type)
  }
}
