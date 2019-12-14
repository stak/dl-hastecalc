export interface Adv {
  name: string
  img: string
  elemental: 'flame' | 'water' | 'wind' | 'light' | 'shadow'
  weapon:
    | 'sword'
    | 'blade'
    | 'dagger'
    | 'lance'
    | 'axe'
    | 'bow'
    | 'wand'
    | 'staff'
  s1: {
    name: string
    img: string
    sp: number
  }
  s2: {
    name: string
    img: string
    sp: number
  }
  haste: number
}
