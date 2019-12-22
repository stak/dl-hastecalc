export type Element = 'flame' | 'water' | 'wind' | 'light' | 'shadow'
export type Stars = 3 | 4 | 5
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

export interface AdvSkill {
  en: string
  ja: string
  icon: string
  sp: number
}

export interface Adv {
  ja: string
  en: string
  img: string
  element: Element
  weapon: Weapon
  stars: Stars
  s1: AdvSkill
  s2: AdvSkill
}

export interface Config {
  weapon: Weapon

  prep: number
  haste: number
  hasteFS: number
  useFS: boolean
  useFSF: boolean
  latencyFS: number
  latencyFSF: number
}

export type ComboBase = {
  [key in Action]: {
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
