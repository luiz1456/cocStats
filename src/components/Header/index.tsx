import { Link } from "react-router-dom"
import { ButtonMenuMobile, ButtonTheme, Container, ContainerLimitWidth, ContainerLogo, ContainerNav } from "./styles"
import { FaHome, FaSearch, FaFlag, FaHeart, FaMoon, FaSun } from "react-icons/fa"
import { useState, useContext } from "react"
import { ThemeContext } from "styled-components"

export default function Header({ toggleTheme }: {toggleTheme: () => void}) {
  const [isActive, setIsActive] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)
  const theme = useContext(ThemeContext)

  return (
    <Container>
      <ContainerLimitWidth>
        <ContainerLogo>
          <Link to={'/'}><img className="logo" src="assets/imgs/others/COC_LOGO.png" alt="" /></Link>
        </ContainerLogo>
        <div className="containerButtons">
          <ContainerNav className={menuOpen ? '' : 'hiden'}>
            <ul>
              <li><Link
                onClick={() => setIsActive('Home')}
                className='linkNav'
                to={'/'}
                style={isActive === 'Home'
                  ? { borderBottom: `3px solid ${theme!.colors.text}` }
                  : undefined}>
                <FaHome />Home</Link></li>
              <li><Link
                onClick={() => setIsActive('Search')}
                className='linkNav'
                to={'search'}
                style={isActive === 'Search'
                  ? { borderBottom: `3px solid ${theme!.colors.text}` }
                  : undefined}>
                <FaSearch />Search</Link></li>
              <li><Link
                onClick={() => setIsActive('Classifications')}
                className='linkNav'
                to={'/'}
                style={isActive === 'Classifications'
                  ? { borderBottom: `3px solid ${theme!.colors.text}` }
                  : undefined}>
                <FaFlag />Classifications</Link></li>
              <li><Link
                onClick={() => setIsActive('Favorite')}
                className='linkNav'
                to={'/'}
                style={isActive === 'Favorite'
                  ? { borderBottom: `3px solid ${theme!.colors.text}` }
                  : undefined}>
                <FaHeart />Favorite</Link></li>
            </ul>
          </ContainerNav>
          <ButtonTheme onClick={toggleTheme}> {theme!.title === 'light' ? <FaSun /> : <FaMoon />} </ButtonTheme>
          <ButtonMenuMobile onClick={() => setMenuOpen(!menuOpen)}>
            <div>
              <div />
              <div />
              <div />
            </div>
          </ButtonMenuMobile>
        </div>
      </ContainerLimitWidth>
    </Container>
  )
}
