import { FaApple, FaGooglePlay, FaSearch } from 'react-icons/fa'
import {
  ContainerLimitWidth,
  ContainerSearch,
  ContainerSearchImg,
  ContainerSearchInput,
  ImgContainer,
  Main,
  Section,
  SectionDownload,
  TextContainer,
} from './styles'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const [playerTag, setPlayerTag] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const formatedPlayerTag = playerTag.replace(/^#/, '')
    navigate(`/playerInfos/${formatedPlayerTag}`)
  }

  return (
    <Main>
      <ContainerLimitWidth>
        <ContainerSearch>
          <ContainerSearchImg>
            <img src="assets/imgs/others/WarriorQueen.png" alt="WarriorQueen" />
          </ContainerSearchImg>
          <ContainerSearchInput>
            <span>Olá chefe, que tal procurar por um jogador?</span>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                maxLength={10}
                placeholder="#YGG9QUQYO"
                value={playerTag}
                onChange={(event) => setPlayerTag(event.target.value)}
              />
              <button
                type="submit"
                disabled={
                  playerTag.length < 9 ||
                  (playerTag.length === 9 && playerTag[0] === '#')
                }
              >
                <FaSearch />
              </button>
            </form>
          </ContainerSearchInput>
        </ContainerSearch>
        <Section>
          <TextContainer>
            <h1>Entre no épico mundo de Clash of Clans!</h1>
            <p>
              Saudações, nobres guerreiros! Bem-vindos à terra de estratégia,
              batalhas e conquistas. Nossa vila abre suas portas a todos que
              buscam desafios épicos e batalhas emocionantes. Aqui, nós, os
              habitantes deste glorioso reino, levantamos nossas defesas
              sabiamente, treinamos nosso exército e nos preparamos para lutar
              contra adversários das partes mais distantes do mundo. Em Clash of
              Clans, nossa determinação é inabalável e nossa coragem, infinita.
            </p>
          </TextContainer>
          <ImgContainer>
            <img src="assets/imgs/models/Super_Wizard.png" alt="Super_Wizard" />
          </ImgContainer>
        </Section>
        <Section>
          <ImgContainer>
            <img src="assets/imgs/models/Super_Archer.png" alt="Super_Archer" />
          </ImgContainer>
          <TextContainer>
            <h1>Prepare-se para a batalha!</h1>
            <p>
              Em Clash of Clans, a estratégia é nosso escudo e nossa espada.
              Erguemos nossas torres com engenhosidade, montamos armadilhas
              astutas para proteger nossos recursos e garantimos a segurança de
              nossa vila. Recrutamos uma variedade de tropas, desde guerreiros
              destemidos até dragões temíveis, formando assim o exército
              perfeito para enfrentar nossos adversários. Navegamos pelas vastas
              terras deste jogo, completando missões desafiadoras e
              reivindicando nossa posição como os líderes supremos desta vila.
            </p>
          </TextContainer>
        </Section>
        <Section>
          <TextContainer>
            <h1>Domine o campo de batalha e conquiste a glória!</h1>
            <p>
              Em Clash of Clans, a batalha nunca cessa. Unimo-nos em clãs
              poderosos ou criamos nossos próprios clãs e nos envolvemos em
              guerras épicas contra outros clãs de todos os cantos. Coordenamos
              ataques estratégicos, planejamos emboscadas astutas e lutamos pela
              supremacia no campo de batalha. Comandamos nossas tropas com
              maestria, utilizando poderes mágicos para triunfar sobre nossos
              adversários e levar nosso clã à glória. A glória aguarda aqueles
              que são corajosos o suficiente para enfrentar este desafio.
              Prepare-se para Clash of Clans - o jogo que testará nossa
              estratégia, habilidade e determinação ao máximo!
            </p>
          </TextContainer>
          <ImgContainer>
            <img src="assets/imgs/models/Super_Dragon.png" alt="Super_Dragon" />
          </ImgContainer>
        </Section>
        <SectionDownload>
          <div className="containerText">
            <p>
              Prepare-se para uma jornada épica de estratégia e conquista!
              Junte-se à batalha e domine o campo de batalha baixando Clash of
              Clans agora mesmo!
            </p>
          </div>
          <a
            href="https://play.google.com/store/apps/details?id=com.supercell.clashofclans"
            target="_blank"
            rel="noreferrer"
          >
            <FaGooglePlay />
            <span>Baixe na Play Store</span>
          </a>
          <a
            href="https://apps.apple.com/us/app/clash-of-clans/id529479190"
            target="_blank"
            rel="noreferrer"
          >
            <FaApple />
            <span>Baixe na Apple Store</span>
          </a>
        </SectionDownload>
      </ContainerLimitWidth>
    </Main>
  )
}
