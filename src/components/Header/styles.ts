import styled from 'styled-components'
import { LimitWidth } from '../LimitWidth'

export const Container = styled.header`
  height: 8rem;
  width: 100%;
  padding: 0 2.4rem;
  font-family: 'Roboto', sans-serif;
  background-color: ${({ theme }) => theme.colors.primary};
  position: fixed;
  top: 0;
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
        transform: translateX(100%);
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
  transition: transform 300ms ease-out;

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
      gap: 0.4rem;
      position: relative;

      &::after {
        content: '';
        width: 100%;
        height: 0.3rem;
        border-radius: 0.4rem;
        background-color: ${({ theme }) => theme.colors.text};
        position: absolute;
        bottom: -0.4rem;
        transform: scaleX(0);
        transition: transform 100ms ease-in-out;
        transform-origin: 50%;
      }

      &:hover::after {
        transform: scalex(100%);
        transform-origin: 50%;
      }
    }
    .active {
      &::after {
        transform: scalex(100%);
        transform-origin: 50%;
      }
    }
  }
  @media (max-width: 694px) {
    transform: translate(0%);
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
        padding: 0.8rem;
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
  padding: 0.4rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;

  &:hover {
    border: 0.1rem solid ${({ theme }) => theme.colors.text};
  }
`
export const ButtonMenuMobile = styled.button`
  cursor: pointer;
  display: none;
  padding: 0.4rem;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 0.1rem solid ${({ theme }) => theme.colors.primary};
  height: 100%;

  &:hover {
    border: 0.1rem solid ${({ theme }) => theme.colors.text};
  }
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 2rem;
    transition: 600ms ease-out;

    .div1 {
      transform-origin: 0%;
      transition: transform 600ms ease-out;
    }

    .div2 {
      transition: 600ms ease-out;
    }

    .div3 {
      transform-origin: 0% 100%;
      transition: transform 600ms ease-out;
    }

    div {
      width: 2.4rem;
      height: 0.4rem;
      border-radius: 0.8rem;
      background-color: ${({ theme }) => theme.colors.text};
      opacity: 1;
    }
  }

  .open {
    transform: translateX(20%);

    .div1 {
      transform-origin: 0% 0%;
      transform: rotate(45deg);
      transition: transform 600ms ease-out;
    }

    .div2 {
      opacity: 0;
      transition: 600ms ease-out;
    }

    .div3 {
      transform-origin: 0% 100%;
      transition: transform 600ms ease-out;
      transform: rotate(-45deg);
    }
  }

  @media (max-width: 694px) {
    display: flex;
  }
`
