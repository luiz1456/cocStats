export interface playerDataType {
  tag: string
  name: string
  townHallLevel: number
  townHallWeaponLevel: number
  expLevel: number
  trophies: number
  bestTrophies: number
  warStars: number
  attackWins: number
  defenseWins: number
  builderHallLevel: number
  builderBaseTrophies: number
  bestBuilderBaseTrophies: number
  role: string
  warPreference: string
  donations: number
  donationsReceived: number
  clanCapitalContributions: number
  thIconUrl: string
  clan: {
    tag: string
    name: string
    clanLevel: number
    badgeUrls: {
      small: string
      large: string
      medium: string
    }
  }
  league?: {
    id: number
    name: string
    iconUrls: {
      small: string
      tiny: string
      medium?: string
    }
  }
  builderBaseLeague: {
    id: number
    name: string
  }
  achievements: {
    name: string
    stars: number
    value: number
    target: number
    info: string
    completionInfo: string
    village: string
  }[]

  labels: {
    id: number
    name: string
    iconUrls: {
      small: string
      medium: string
    }
  }[]

  troops: {
    name: string
    namePt?: string
    description?: string
    level?: number
    maxLevel?: number
    village: string
    imagesUrl?: {
      icon: string
      model: string
    }
  }[]

  heroes: {
    name: string
    namePt?: string
    description?: string
    level?: number
    maxLevel?: number
    equipment?: [
      {
        name: string
        level: number
        maxLevel: number
        village: string
      },
    ]
    village?: string
    imagesUrl?: {
      icon: string
      model: string
    }
  }[]

  heroEquipment: {
    name: string
    level: number
    maxLevel: number
    village: string
  }[]

  spells: {
    name: string
    namePt: string
    description: string
    level?: number
    maxLevel?: number
    village?: string
    imagesUrl?: {
      icon: string
    }
  }[]
}
