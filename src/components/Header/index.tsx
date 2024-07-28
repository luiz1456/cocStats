import { NavLink } from 'react-router-dom'
import {
  ButtonMenuMobile,
  ButtonTheme,
  Container,
  ContainerLimitWidth,
  ContainerLogo,
  ContainerNav,
} from './styles'
import {
  FaHome,
  FaSearch,
  FaFlag,
  FaHeart,
  FaMoon,
  FaSun,
} from 'react-icons/fa'
import { useState, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import logo from './assets/COC_LOGO.png'

export default function Header({ toggleTheme }: { toggleTheme: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const theme = useContext(ThemeContext)

  return (
    <Container>
      <ContainerLimitWidth>
        <ContainerLogo>
          <NavLink to={'/'}>
            <img className="logo" src={logo} alt="" />
          </NavLink>
        </ContainerLogo>
        <div className="containerButtons">
          <ContainerNav className={menuOpen ? '' : 'hiden'}>
            <ul>
              <li>
                <NavLink
                  className="linkNav"
                  to={'/'}
                  onClick={() => setMenuOpen(false)}
                >
                  <FaHome />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="linkNav"
                  to={'search'}
                  onClick={() => setMenuOpen(false)}
                >
                  <FaSearch />
                  Procurar
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="linkNav"
                  to={'/xx'}
                  onClick={() => setMenuOpen(false)}
                >
                  <FaFlag />
                  Classificações
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="linkNav"
                  to={'/csd'}
                  onClick={() => setMenuOpen(false)}
                >
                  <FaHeart />
                  Favoritos
                </NavLink>
              </li>
            </ul>
          </ContainerNav>
          <ButtonTheme onClick={toggleTheme}>
            {' '}
            {theme!.title === 'light' ? <FaSun /> : <FaMoon />}{' '}
          </ButtonTheme>
          <ButtonMenuMobile onClick={() => setMenuOpen(!menuOpen)}>
            <div className={menuOpen ? 'open' : ''}>
              <div className="div1" />
              <div className="div2" />
              <div className="div3" />
            </div>
          </ButtonMenuMobile>
        </div>
      </ContainerLimitWidth>
    </Container>
  )
}
