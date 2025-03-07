import { Block } from './block'

export class Duo extends Block {
  constructor() {
    super({
      name: 'duo',
      requirements: { copper: 35 },
      size: 1,
    })
  }
}
export class Scatter extends Block {
  constructor() {
    super({
      name: 'scatter',
      requirements: { copper: 85, lead: 45 },
      size: 2,
    })
  }
}
export class Scorch extends Block {
  constructor() {
    super({
      name: 'scorch',
      requirements: { copper: 25, graphite: 22 },
      size: 1,
    })
  }
}
export class Hail extends Block {
  constructor() {
    super({
      name: 'hail',
      requirements: { copper: 40, graphite: 17 },
      size: 1,
    })
  }
}
export class Wave extends Block {
  constructor() {
    super({
      name: 'wave',
      requirements: { metaglass: 45, lead: 75 },
      size: 2,
    })
  }
}
export class Lancer extends Block {
  constructor() {
    super({
      name: 'lancer',
      requirements: { copper: 60, lead: 70, silicon: 50 },
      size: 2,
    })
  }
}
export class Arc extends Block {
  constructor() {
    super({
      name: 'arc',
      requirements: { copper: 50, lead: 50 },
      size: 1,
    })
  }
}
export class Parallax extends Block {
  constructor() {
    super({
      name: 'parallax',
      requirements: { silicon: 120, titanium: 90, graphite: 30 },
      size: 2,
    })
  }
}
export class Swarmer extends Block {
  constructor() {
    super({
      name: 'swarmer',
      requirements: { graphite: 35, titanium: 35, plastanium: 45, silicon: 30 },
      size: 2,
    })
  }
}
export class Salvo extends Block {
  constructor() {
    super({
      name: 'salvo',
      requirements: { copper: 100, graphite: 90, titanium: 60 },
      size: 2,
    })
  }
}
export class Segment extends Block {
  constructor() {
    super({
      name: 'segment',
      requirements: { silicon: 130, thorium: 80, 'phase-fabric': 40 },
      size: 2,
    })
  }
}
export class Tsunami extends Block {
  constructor() {
    super({
      name: 'tsunami',
      requirements: { metaglass: 100, lead: 400, titanium: 250, thorium: 100 },
      size: 3,
    })
  }
}
export class Fuse extends Block {
  constructor() {
    super({
      name: 'fuse',
      requirements: { copper: 225, graphite: 225, thorium: 100 },
      size: 3,
    })
  }
}
export class Ripple extends Block {
  constructor() {
    super({
      name: 'ripple',
      requirements: { copper: 150, graphite: 135, titanium: 60 },
      size: 3,
    })
  }
}
export class Cyclone extends Block {
  constructor() {
    super({
      name: 'cyclone',
      requirements: { copper: 200, titanium: 125, plastanium: 80 },
      size: 3,
    })
  }
}
export class Foreshadow extends Block {
  constructor() {
    super({
      name: 'foreshadow',
      requirements: {
        copper: 1000,
        metaglass: 600,
        'surge-alloy': 300,
        plastanium: 200,
        silicon: 600,
      },
      size: 1,
    })
  }
}
export class Spectre extends Block {
  constructor() {
    super({
      name: 'spectre',
      requirements: {
        copper: 900,
        graphite: 300,
        'surge-alloy': 250,
        plastanium: 175,
        thorium: 250,
      },
      size: 4,
    })
  }
}
export class Meltdown extends Block {
  constructor() {
    super({
      name: 'meltdown',
      requirements: {
        copper: 1200,
        lead: 350,
        graphite: 300,
        'surge-alloy': 325,
        silicon: 325,
      },
      size: 4,
    })
  }
}
