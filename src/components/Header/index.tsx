import { Link } from "react-router-dom"
import { ButtonMenuMobile, ButtonTheme, Container, ContainerLimitWidth, ContainerLogo, ContainerNav } from "./styles"
import { FaHome, FaSearch, FaFlag, FaHeart, FaMoon, FaSun } from "react-icons/fa"
import { useState, useContext } from "react"
import { ThemeContext } from "styled-components"

export default function Header({ toggleTheme }: {toggleTheme: () => void}) {
  const [isActive, setIsActive] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)
  const theme = useContext(ThemeContext)

  const handleNav = (active: string) => {
    setIsActive(active)
    setMenuOpen(false)
  }

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
                onClick={() => handleNav('Home')}
                className= {`linkNav ${isActive === 'Home' && 'active'}`}
                to={'/'}>
                <FaHome />Home</Link></li>
              <li><Link
                onClick={() => handleNav('Search')}
                className= {`linkNav ${isActive === 'Search' && 'active'}`}
                to={'search'}>
                <FaSearch />Search</Link></li>
              <li><Link
                onClick={() => handleNav('Classifications')}
                className= {`linkNav ${isActive === 'Classifications' && 'active'}`}
                to={'/'}>
                <FaFlag />Classifications</Link></li>
              <li><Link
                onClick={() => handleNav('Favorite')}
                className= {`linkNav ${isActive === 'Favorite' && 'active'}`}
                to={'/'}>
                <FaHeart />Favorite</Link></li>
            </ul>
          </ContainerNav>
          <ButtonTheme onClick={toggleTheme}> {theme!.title === 'light' ? <FaSun /> : <FaMoon />} </ButtonTheme>
          <ButtonMenuMobile onClick={() => setMenuOpen(!menuOpen)}>
            <div className={menuOpen ? 'open' : ''}>
              <div className="div1"/>
              <div className="div2"/>
              <div className="div3"/>
            </div>
          </ButtonMenuMobile>
        </div>
      </ContainerLimitWidth>
    </Container>
  )
}
