export type Elemental = 'flame' | 'water' | 'wind' | 'light' | 'shadow'

export type Weapon =
  | 'sword'
  | 'blade'
  | 'dagger'
  | 'lance'
  | 'axe'
  | 'bow'
  | 'wand'
  | 'staff'

export type Action = 'x1' | 'x2' | 'x3' | 'x4' | 'x5' | 'fs' | 'fsf' | 'dodge'

export interface Adv {
  name: string
  img: string
  elemental: Elemental
  weapon: Weapon
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

export interface Config {
  weapon: Weapon

  prep: number
  haste: number
  hasteFS: number
  useFS: boolean
  useFSC: boolean
  latencyFS: number
  latencyFSC: number
}

export interface ComboBase {
  [key: string]: {
    sp: number
    startup: number
    recovery: number
  }
}

export interface ComboDataDetail {
  action: Action
  currentSP: number
  gainSP: number
  currentTime: number
  spendTime: number
}

export interface ComboData {
  time: number
  str: string
  actions: Action[]
  detail: ComboDataDetail[]
}
