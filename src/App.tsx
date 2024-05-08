import { useState } from "react"
import { Outlet } from "react-router-dom"
import { GlobalStyled } from "./styles/GlobalStyled"
import Header from "./components/Header/index.tsx"

import { ThemeProvider } from "styled-components"
import light from "./styles/themes/light"
import dark from "./styles/themes/dark"

function App() {
  const [currTheme, setCurrTheme] = useState(localStorage.getItem('theme') || 'light')

  const toggleTheme = () => {
      if(currTheme === 'light') {
        localStorage.setItem('theme', 'dark')
        setCurrTheme('dark')
      } else {
        localStorage.setItem('theme', 'light')
        setCurrTheme('light')
      }
  }

  return (
    <ThemeProvider theme={ currTheme === 'light' ? light : dark }>
      <GlobalStyled />
      <Header toggleTheme={toggleTheme}/>
      <Outlet />
    </ThemeProvider>
  )
}

export default App
