import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchPlayer } from '../../api/fetchPlayer'
import { fetchClan } from '../../api/fetchClan'
import { LevelIndicator } from './components/LevelIndicator'
import { townHall } from '../../data/townHall'
import { Card, ContainerCards, Image } from './styles'
import { heroesData } from '../../data/heroesData'
import { troopsData } from '../../data/troopsData'
import { playerDataType } from '../../@types/playerDataType'
import { clanDataType } from '../../@types/clanDataType'
import { spellsData } from '../../data/spellsData'

// const superTroopsList = [
//   'Super Barbarian',
//   'Super Archer',
//   'Super Wall Breaker',
//   'Super Giant',
//   'Sneaky Goblin',
//   'Super Miner',
//   'Rocket Balloon',
//   'Inferno Dragon',
//   'Super Valkyrie',
//   'Super Witch',
//   'Ice Hound',
//   'Super Bowler',
//   'Super Dragon',
//   'Super Wizard',
//   'Super Minion',
//   'Super Hog Rider',
// ]

const elixirSpellsList = [
  'Lightning Spell',
  'Healing Spell',
  'Rage Spell',
  'Jump Spell',
  'Freeze Spell',
  'Clone Spell',
  'Invisibility Spell',
  'Recall Spell',
]

const darkElixirSpellsList = [
  'Poison Spell',
  'Earthquake Spell',
  'Haste Spell',
  'Skeleton Spell',
  'Bat Spell',
  'Overgrowth Spell',
]

const elixirTroopsList = [
  'Barbarian',
  'Archer',
  'Giant',
  'Goblin',
  'Wall Breaker',
  'Balloon',
  'Wizard',
  'Healer',
  'Dragon',
  'P.E.K.K.A',
  'Baby Dragon',
  'Miner',
  'Electro Dragon',
  'Yeti',
  'Dragon Rider',
  'Electro Titan',
  'Root Rider',
]

const darkElixirTroopsList = [
  'Minion',
  'Hog Rider',
  'Valkyrie',
  'Golem',
  'Witch',
  'Lava Hound',
  'Bowler',
  'Ice Golem',
  'Headhunter',
  'Apprentice Warden',
  'Druid',
]

const builderTroopsList = [
  'Raged Barbarian',
  'Sneaky Archer',
  'Boxer Giant',
  'Beta Minion',
  'Bomber',
  'Baby Dragon',
  'Cannon Cart',
  'Night Witch',
  'Drop Ship',
  'Power P.E.K.K.A',
  'Hog Glider',
  'Electrofire Wizard',
]

const siegeMachinesList = [
  'Wall Wrecker',
  'Battle Blimp',
  'Stone Slammer',
  'Siege Barracks',
  'Log Launcher',
  'Flame Flinger',
  'Battle Drill',
]

export default function PlayerInfos() {
  const [playerData, setPlayerData] = useState<playerDataType | null>(null)
  const [clanData, setClanData] = useState<clanDataType | null>(null)
  const { playerTag } = useParams()
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState<boolean>(true)

  function completePlayerData(response: playerDataType) {
    if (response) {
      heroesData.forEach((element) => {
        const responseHeroIndex = response.heroes.findIndex(
          (item) => element.name === item.name,
        )
        const responseHero = response.heroes.find(
          (item) => element.name === item.name,
        )
        if (responseHero) {
          response.heroes[responseHeroIndex] = {
            ...responseHero,
            namePt: element.namePt,
            description: element.description,
            imagesUrl: element.imagesUrl,
          }
        }

        if (responseHeroIndex === -1) {
          response.heroes = [...response.heroes, element]
        }
      })
      troopsData.forEach((element) => {
        const responseTroopIndex = response.troops.findIndex(
          (item) =>
            element.name === item.name && element.village === item.village,
        )
        const responseTroop = response.troops.find(
          (item) =>
            element.name === item.name && element.village === item.village,
        )
        if (responseTroop) {
          response.troops[responseTroopIndex] = {
            ...responseTroop,
            namePt: element.namePt,
            description: element.description,
            imagesUrl: element.imagesUrl,
          }
        }

        if (responseTroopIndex === -1) {
          response.troops = [...response.troops, element]
        }
      })
      spellsData.forEach((element) => {
        const responseSpellIndex = response.spells.findIndex(
          (item) => element.name === item.name,
        )
        const responseSpell = response.spells.find(
          (item) => element.name === item.name,
        )
        if (responseSpell) {
          response.spells[responseSpellIndex] = {
            ...responseSpell,
            namePt: element.namePt,
            description: element.description,
            imagesUrl: element.imagesUrl,
          }
        }

        if (responseSpellIndex === -1) {
          response.spells = [...response.spells, element]
        }
      })
      if (!('league' in response)) {
        response = {
          ...response,
          league: {
            iconUrls: {
              small:
                'https://api-assets.clashofclans.com/leagues/72/e--YMyIexEQQhE4imLoJcwhYn6Uy8KqlgyY3_kFV6t4.png',
              tiny: 'https://api-assets.clashofclans.com/leagues/36/e--YMyIexEQQhE4imLoJcwhYn6Uy8KqlgyY3_kFV6t4.png',
            },

            id: 29000000,
            name: 'Unranked',
          },
        }
      }

      townHall.forEach((item, i) => {
        const PlayerTownHall = `${response.townHallLevel}.${response.townHallWeaponLevel || '1'}`
        if (item.th === PlayerTownHall) {
          response = {
            ...response,
            thIconUrl: townHall[i].iconUrl,
          }
        }
      })
    }
    return response
  }

  function completeClanData(response: clanDataType) {
    response.memberList.forEach((member, i) => {
      const index = townHall.findIndex(
        (item) => item.th === `${member.townHallLevel}.1`,
      )
      response.memberList[i] = {
        ...member,
        thIconUrl: townHall[index].iconUrl,
      }
    })
    return response
  }

  useEffect(() => {
    const fetchPlayerFn = async () => {
      if (playerTag) {
        setIsLoading(true)
        let playerData: playerDataType = await fetchPlayer(playerTag)
        playerData = completePlayerData(playerData)
        if (playerData.clan) {
          let clanData: clanDataType = await fetchClan(playerData.clan.tag)
          clanData = completeClanData(clanData)
          setClanData(clanData)
        }
        console.log(playerData.troops)
        setPlayerData(playerData)
        setIsLoading(false)
      }
    }
    fetchPlayerFn()
  }, [playerTag])

  return (
    <div style={{ marginTop: '8rem', padding: '1.2rem' }}>
      {!isLoading && playerData ? (
        <>
          <div
            style={{
              padding: '3.2rem',
              fontSize: '2.4rem',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img src={playerData.league?.iconUrls.small} alt="" />
            <h1>{playerData.name}</h1>
          </div>
          <img src={playerData.thIconUrl} style={{ width: '6rem' }} alt="" />
          <h1 style={{ padding: '3.2rem' }}>Heróis</h1>
          <ContainerCards>
            {playerData.heroes.map((hero, i) => {
              return (
                <Card key={i} className={hero.level ? '' : 'notUnlocked'}>
                  <Image src={hero.imagesUrl?.icon} alt={hero.namePt} />
                  {hero.level && (
                    <LevelIndicator
                      level={hero.level}
                      $variant={
                        hero.maxLevel === hero.level
                          ? 'isMaximized'
                          : 'notMaximized'
                      }
                    />
                  )}
                </Card>
              )
            })}
          </ContainerCards>
          <h1 style={{ padding: '3.2rem' }}>Tropas</h1>
          <ContainerCards>
            {playerData.troops
              .filter(
                (troop) =>
                  elixirTroopsList.includes(troop.name) &&
                  troop.village === 'home',
              )
              .map((item, i) => {
                return (
                  <Card key={i} className={item.level ? '' : 'notUnlocked'}>
                    <Image src={item.imagesUrl?.icon} alt="sss" />
                    {item.level && (
                      <LevelIndicator
                        level={item.level}
                        $variant={
                          item.maxLevel === item.level
                            ? 'isMaximized'
                            : 'notMaximized'
                        }
                      />
                    )}
                  </Card>
                )
              })}
            {playerData.troops
              .filter(
                (troop) =>
                  darkElixirTroopsList.includes(troop.name) &&
                  troop.village === 'home',
              )
              .map((item, i) => {
                return (
                  <Card key={i} className={item.level ? '' : 'notUnlocked'}>
                    <Image src={item.imagesUrl?.icon} alt="sss" />
                    {item.level && (
                      <LevelIndicator
                        level={item.level}
                        $variant={
                          item.maxLevel === item.level
                            ? 'isMaximized'
                            : 'notMaximized'
                        }
                      />
                    )}
                  </Card>
                )
              })}
          </ContainerCards>
          <h1 style={{ padding: '1.2rem' }}>Feitiçõs</h1>
          <ContainerCards>
            {playerData.spells
              .filter((spell) => elixirSpellsList.includes(spell.name))
              .map((item) => {
                return (
                  <Card
                    key={item.name}
                    className={item.level ? '' : 'notUnlocked'}
                  >
                    <Image src={item.imagesUrl?.icon} alt="sss" />
                    {item.level && (
                      <LevelIndicator
                        level={item.level}
                        $variant={
                          item.maxLevel === item.level
                            ? 'isMaximized'
                            : 'notMaximized'
                        }
                      />
                    )}
                  </Card>
                )
              })}
            {playerData.spells
              .filter((spell) => darkElixirSpellsList.includes(spell.name))
              .map((item) => {
                return (
                  <Card
                    key={item.name}
                    className={item.level ? '' : 'notUnlocked'}
                  >
                    <Image src={item.imagesUrl?.icon} alt="sss" />
                    {item.level && (
                      <LevelIndicator
                        level={item.level}
                        $variant={
                          item.maxLevel === item.level
                            ? 'isMaximized'
                            : 'notMaximized'
                        }
                      />
                    )}
                  </Card>
                )
              })}
          </ContainerCards>
          <h1 style={{ padding: '1.2rem' }}>Máquinas de cerco</h1>
          <ContainerCards>
            {playerData.troops
              .filter((troop) => siegeMachinesList.includes(troop.name))
              .map((item, i) => {
                return (
                  <Card key={i} className={item.level ? '' : 'notUnlocked'}>
                    <Image src={item.imagesUrl?.icon} alt="sss" />
                    {item.level && (
                      <LevelIndicator
                        level={item.level}
                        $variant={
                          item.maxLevel === item.level
                            ? 'isMaximized'
                            : 'notMaximized'
                        }
                      />
                    )}
                  </Card>
                )
              })}
          </ContainerCards>
          <h1 style={{ padding: '1.2rem' }}>Tropas da base do construtor</h1>
          <ContainerCards>
            {playerData.troops
              .filter(
                (troop) =>
                  builderTroopsList.includes(troop.name) &&
                  troop.village === 'builderBase',
              )
              .map((item, i) => {
                return (
                  <Card key={i} className={item.level ? '' : 'notUnlocked'}>
                    <Image src={item.imagesUrl?.icon} alt="sss" />
                    {item.level && (
                      <LevelIndicator
                        level={item.level}
                        $variant={
                          item.maxLevel === item.level
                            ? 'isMaximized'
                            : 'notMaximized'
                        }
                      />
                    )}
                  </Card>
                )
              })}
          </ContainerCards>
          {clanData && (
            <>
              <div
                style={{
                  padding: '3.2rem',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <img src={clanData.badgeUrls.small} alt="" />
                <div>
                  <h1>{clanData.name}</h1>
                  <h3>{clanData.tag}</h3>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1.2rem',
                }}
              >
                {clanData.memberList.map((item, i) => {
                  return (
                    <div
                      key={i}
                      style={{
                        backgroundColor: '#0000008a',
                        padding: '1.2rem',
                        display: 'flex',
                        alignItems: 'center',
                        width: '30rem',
                        gap: '1.2rem',
                      }}
                    >
                      <img src={item.league?.iconUrls.small} alt="" />
                      <img
                        src={item.thIconUrl}
                        style={{ width: '6rem' }}
                        alt=""
                      />
                      <div>
                        <h1>{item.name}</h1>
                        <button
                          style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                          }}
                          onClick={() => {
                            const formatedPlayerTag = item.tag.replace(/^#/, '')
                            navigate(`/playerInfos/${formatedPlayerTag}`)
                            window.scrollTo(0, 0)
                          }}
                        >
                          {item.tag}
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </>
          )}
        </>
      ) : (
        <h1>indisponivel</h1>
      )}
    </div>
  )
}
