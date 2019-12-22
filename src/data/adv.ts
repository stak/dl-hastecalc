import { Adv } from '../types'
import csvParse from 'csv-parse/lib/sync'

const __raw__ = require('raw.macro')
const csvAdvs: { [key: string]: any } = csvParse(__raw__('./adv.csv'), {
  columns: true,
  bom: true
})

const allAdvs: Adv[] = csvAdvs
  .map(constructDottedKeyObject)
  .map((adv: { [key: string]: any }) => ({
    ...adv,
    img: adv.img || adv.en,
    element: adv.element.slice(1),
    weapon: adv.weapon.slice(1)
  }))

function constructDottedKeyObject(src: { [key: string]: any }) {
  const dst: { [key: string]: any } = {}

  const childObjectKeys = Object.keys(src)
    .filter(k => k.indexOf('.') >= 0)
    .map(k => k.slice(0, k.indexOf('.')))
    .filter((e, i, a) => a.indexOf(e) === i) // unique

  // create child object
  childObjectKeys.forEach(k => {
    if (k in src) {
      throw new Error(`Object key "${k}" already exists`)
    }
    dst[k] = {}
  })

  // assign value into objects
  Object.keys(src).forEach(k => {
    if (k.indexOf('.') < 0) {
      dst[k] = src[k]
    } else {
      const objectKey = k.slice(0, k.indexOf('.'))
      const property = k.slice(k.indexOf('.') + 1)
      dst[objectKey][property] = src[k]
    }
  })

  // construct child object recursively
  childObjectKeys.forEach(k => {
    dst[k] = constructDottedKeyObject(dst[k])
  })

  return dst
}

export default allAdvs
