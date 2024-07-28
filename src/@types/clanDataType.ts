export interface clanDataType {
  tag: string
  name: string
  type: string
  location: {
    id: number
    name: string
    isCountry: boolean
    countryCode: string
  }
  isFamilyFriendly: boolean
  badgeUrls: {
    small: string
    large: string
    medium: string
  }
  clanLevel: number
  clanPoints: number
  clanBuilderBasePoints: number
  clanCapitalPoints: number
  capitalLeague: {
    id: number
    name: string
  }
  requiredTrophies: number
  warFrequency: string
  warWinStreak: number
  warWins: number
  warTies: number
  warLosses: number
  isWarLogPublic: boolean
  warLeague: {
    id: number
    name: string
  }

  memberList: {
    name: string
    tag: string
    thIconUrl: string
    role: string
    expLevel: number
    trophies: number
    townHallLevel: number
    league: {
      iconUrls: {
        medium: string
        small: string
        tiny: string
      }
      id: number
      name: string
    }
    builderBaseLeague: {
      id: number
      name: string
    }
    builderBaseTrophies: number
  }[]
  members: number
  labels: {
    id: number
    name: string
    iconUrls: {
      small: string
      medium: string
    }
  }[]
  requiredBuilderBaseTrophies: number
  requiredTownhallLevel: number
  chatLanguage: {
    id: number
    name: string
    languageCode: string
  }
}
