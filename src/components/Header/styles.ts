import styled from "styled-components";
import { LimitWidth } from "../LimitWidth";

export const Container = styled.header`
  height: 8rem;
  width: 100%;
  padding: 0 2.4rem;
  font-family: 'Roboto', sans-serif;
  background-color: ${({ theme }) => theme.colors.primary};
  position: fixed;
  z-index: 5;

  .containerButtons {
    display: flex;
    align-items: center;
    gap: 3.6rem;
}

  @media (max-width: 694px) {
    .containerButtons {
      gap: 1.6rem;

    .hiden {
      display: none;
    }
    }
  } 
`

export const ContainerLogo = styled.div`
  height: 100%;
  padding: 1.2rem;
  .logo {
    max-height: 100%;
  }
`
export const ContainerNav = styled.nav`

  ul {
    display: flex;
    list-style: none;
    gap: 1.6rem;

    .linkNav {
      color: ${({ theme }) => theme.colors.text};
      text-decoration: none;
      font-size: 1.6rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: .4rem;
      border-bottom: .3rem solid ${({ theme }) => theme.colors.primary};
      
      &:hover {
        border-bottom: .3rem solid ${({ theme }) => theme.colors.text};
      }
    }

    
  }
  @media (max-width: 694px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 8rem;
    right: 0;
    padding: 0 3.2rem 3.2rem;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 0 0 0 1.2rem;
    width: 20rem;

    ul {
      flex-direction: column;
      
      li {
        padding: .8rem;
      }
    }
  }
  `

export const ContainerLimitWidth = styled(LimitWidth)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`

export const ButtonTheme = styled.button`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.6rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: .4rem;
  border: .1rem solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;

  &:hover {
    border: .1rem solid ${({ theme }) => theme.colors.text};
  }
`
export const ButtonMenuMobile = styled.button`
  cursor: pointer;
  display: none;
  padding: .4rem;
  border-radius: .4rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border: .1rem solid ${({ theme }) => theme.colors.primary};
  
  &:hover {
    border: .1rem solid ${({ theme }) => theme.colors.text};
  }

  &>div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 2rem;

    div {
      width: 2.8rem;
      height: .4rem;
      border-radius: .8rem;
      background-color: ${({ theme }) => theme.colors.text};
    }
  }

  @media (max-width: 694px) {
    display: flex;
  }
`