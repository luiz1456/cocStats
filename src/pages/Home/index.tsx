import { FaSearch } from "react-icons/fa";
import { ContainerLimitWidth, ContainerSearch, ContainerSearchImg, ContainerSearchInput, ImgContainer, Main, Section, TextContainer } from "./styles";

export default function Home() {
  return (
    <Main>
      <ContainerLimitWidth>
        <ContainerSearch>
          <ContainerSearchImg>
            <img src="assets/imgs/others/WarriorQueen.png" alt="WarriorQueen" />
          </ContainerSearchImg>
          <ContainerSearchInput>
            <span>Hello chief, how about searching for a player?</span>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="text" maxLength={10} placeholder="#YGG9QUQYO" />
              <button type="submit"><FaSearch /></button>
            </form>
          </ContainerSearchInput>
        </ ContainerSearch>
        <Section>
          <TextContainer>
            <h1>Step into the epic world of Clash of Clans!</h1>
            <p>Greetings, noble warriors! Welcome to the land of strategy, battles, and conquests. Our village opens its doors to all who seek epic challenges and thrilling encounters. Here, we, the inhabitants of this glorious realm, raise our defenses wisely, train our brave warriors, and prepare to fight against adversaries from the farthest reaches of the world. In Clash of Clans, our determination is unwavering, and our courage, boundless.</p>
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
            <h1>Prepare for battle!</h1>
            <p>In Clash of Clans, strategy is our shield and our sword. We erect our towers with ingenuity, set cunning traps to protect our resources, and ensure the safety of our home. We recruit a variety of troops, from fearless warriors to fearsome dragons, thus forging the perfect army to face our adversaries. We navigate the vast lands of this game, completing challenging missions and claiming our position as the supreme leaders of this village.</p>
          </TextContainer>
        </Section>
        <Section>
          <TextContainer>
            <h1>Master the battlefield and conquer glory!</h1>
            <p>In Clash of Clans, the battle never ceases. We unite in powerful clans or create our own and engage in epic wars against other clans from all corners. We coordinate strategic attacks, plan cunning ambushes, and strive for supremacy on the battlefield. We command our soldiers with mastery, using magical powers to triumph over our adversaries and lead our clan to glory. Glory awaits those who are brave enough to face this challenge. Prepare for Clash of Clans - the game that will test our strategy, skill, and determination to the limits!</p>
          </TextContainer>
          <ImgContainer>
            <img src="assets/imgs/models/Super_Dragon.png" alt="Super_Dragon" />
          </ImgContainer>
        </Section>
      </ ContainerLimitWidth>
    </Main >
  )
}
