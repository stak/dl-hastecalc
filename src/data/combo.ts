import { ComboBase } from '../types'

const weaponCombo: { [key: string]: ComboBase } = {
  blade: {
    x1: {
      sp: 130,
      startup: 10,
      recovery: 23
    },
    x2: {
      sp: 130,
      startup: 0,
      recovery: 41
    },
    x3: {
      sp: 220,
      startup: 6,
      recovery: 37
    },
    x4: {
      sp: 360,
      startup: 0,
      recovery: 65
    },
    x5: {
      sp: 660,
      startup: 0,
      recovery: 62
    },
    fs: {
      sp: 200,
      startup: 30,
      recovery: 41
    },
    fsf: {
      sp: 0,
      startup: 0,
      recovery: 33
    },
    dodge: {
      sp: 0,
      startup: 0,
      recovery: 43
    }
  }
}

export default weaponCombo
