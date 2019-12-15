import { ComboBase } from '../types'

const weaponCombo: { [key: string]: ComboBase } = {
  sword: {
    x1: {
      sp: 150,
      startup: 9,
      recovery: 26
    },
    x2: {
      sp: 150,
      startup: 0,
      recovery: 23
    },
    x3: {
      sp: 196,
      startup: 0,
      recovery: 36
    },
    x4: {
      sp: 265,
      startup: 0,
      recovery: 37
    },
    x5: {
      sp: 391,
      startup: 0,
      recovery: 42
    },
    fs: {
      sp: 345,
      startup: 19,
      recovery: 21
    },
    fsf: {
      sp: 0,
      startup: 0,
      recovery: 30 // TODO:
    },
    dodge: {
      sp: 0,
      startup: 0,
      recovery: 43
    }
  },
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
  },
  dagger: {
    x1: {
      sp: 144,
      startup: 12,
      recovery: 22
    },
    x2: {
      sp: 144,
      startup: 0,
      recovery: 41
    },
    x3: {
      sp: 264,
      startup: 0,
      recovery: 25
    },
    x4: {
      sp: 288,
      startup: 0,
      recovery: 36
    },
    x5: {
      sp: 288,
      startup: 0,
      recovery: 40
    },
    fs: {
      sp: 288,
      startup: 54,
      recovery: 14
    },
    fsf: {
      sp: 0,
      startup: 0,
      recovery: 30 // TODO:
    },
    dodge: {
      sp: 0,
      startup: 0,
      recovery: 43
    }
  },
  lance: {
    x1: {
      sp: 120,
      startup: 9,
      recovery: 41
    },
    x2: {
      sp: 240,
      startup: 0,
      recovery: 34
    },
    x3: {
      sp: 120,
      startup: 0,
      recovery: 37
    },
    x4: {
      sp: 480,
      startup: 0,
      recovery: 40
    },
    x5: {
      sp: 600,
      startup: 0,
      recovery: 67
    },
    fs: {
      sp: 400,
      startup: 49,
      recovery: 25
    },
    fsf: {
      sp: 0,
      startup: 0,
      recovery: 35
    },
    dodge: {
      sp: 0,
      startup: 0,
      recovery: 43
    }
  },
  axe: {
    x1: {
      sp: 200,
      startup: 16,
      recovery: 46
    },
    x2: {
      sp: 240,
      startup: 0,
      recovery: 61
    },
    x3: {
      sp: 360,
      startup: 0,
      recovery: 40
    },
    x4: {
      sp: 380,
      startup: 0,
      recovery: 78
    },
    x5: {
      sp: 420,
      startup: 0,
      recovery: 19
    },
    fs: {
      sp: 300,
      startup: 118,
      recovery: 34
    },
    fsf: {
      sp: 0,
      startup: 0,
      recovery: 41
    },
    dodge: {
      sp: 0,
      startup: 0,
      recovery: 43
    }
  },
  bow: {
    x1: {
      sp: 184,
      startup: 23,
      recovery: 35
    },
    x2: {
      sp: 92,
      startup: 0,
      recovery: 33
    },
    x3: {
      sp: 276,
      startup: 0,
      recovery: 51
    },
    x4: {
      sp: 414,
      startup: 0,
      recovery: 66
    },
    x5: {
      sp: 529,
      startup: 0,
      recovery: 24
    },
    fs: {
      sp: 460,
      startup: 63,
      recovery: 37 // TODO: check roll fs
    },
    fsf: {
      sp: 0,
      startup: 0,
      recovery: 32
    },
    dodge: {
      sp: 0,
      startup: 0,
      recovery: 43
    }
  },
  wand: {
    x1: {
      sp: 130,
      startup: 18,
      recovery: 33
    },
    x2: {
      sp: 200,
      startup: 0,
      recovery: 31
    },
    x3: {
      sp: 240,
      startup: 0,
      recovery: 53
    },
    x4: {
      sp: 430,
      startup: 0,
      recovery: 64
    },
    x5: {
      sp: 600,
      startup: 0,
      recovery: 68
    },
    fs: {
      sp: 400,
      startup: 41,
      recovery: 81
    },
    fsf: {
      sp: 0,
      startup: 0,
      recovery: 29
    },
    dodge: {
      sp: 0,
      startup: 0,
      recovery: 43
    }
  },
  staff: {
    x1: {
      sp: 232,
      startup: 18,
      recovery: 29
    },
    x2: {
      sp: 232,
      startup: 0,
      recovery: 42
    },
    x3: {
      sp: 348,
      startup: 0,
      recovery: 38
    },
    x4: {
      sp: 464,
      startup: 0,
      recovery: 67
    },
    x5: {
      sp: 696,
      startup: 0,
      recovery: 68
    },
    fs: {
      sp: 580,
      startup: 42,
      recovery: 240
    },
    fsf: {
      sp: 0,
      startup: 0,
      recovery: 40
    },
    dodge: {
      sp: 0,
      startup: 0,
      recovery: 43
    }
  }
}

export default weaponCombo
