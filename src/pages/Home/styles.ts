import styled from "styled-components";
import { LimitWidth } from "../../components/LimitWidth.ts";

export const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.background};
`

export const ContainerLimitWidth = styled(LimitWidth)`
  padding: 8rem 0;
`
export const ContainerSearch = styled.section`
  border-bottom: .2rem solid ${({ theme }) => theme.colors.primary};
  margin: 0 1.2rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
`
export const ContainerSearchImg = styled.div`
  padding-top: 1.2rem;

  display: flex;
  align-items: end;
  justify-content: flex-end;
  
  img {
    width: 100%;
    object-fit: cover;
    object-position: top;
  }
`
export const ContainerSearchInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  padding: 1.2rem;

  span {
    color: ${({ theme }) => theme.colors.text};
    font-size: 3.6rem;
    font-family: 'Roboto' , sans-serif;
    font-style: italic;
  }

  form {
    width: 100%;
    display: flex;
    align-items: center;
    
    input {
      padding-left: 1.2rem;
      border-radius: .8rem 0 0 .8rem;
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.text};
      border: .1rem solid ${({ theme }) => theme.colors.primary};
      border-right: none;
      font-size: 2.4rem;
      height: 4.4rem;

      &:hover {
        border: .1rem solid ${({ theme }) => theme.colors.text};
        border-right: none;
      }
      
    }
    
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0 .8rem .8rem 0;
      background-color: ${({ theme }) => theme.colors.secundary};
      border: .1rem solid ${({ theme }) => theme.colors.secundary};
      border-left: none;
      color: ${({ theme }) => theme.colors.text};
      font-size: 2.4rem;
      height: 4.4rem;
      width: 4.4rem;

      &:hover {
        border: .1rem solid ${({ theme }) => theme.colors.text};
        border-left: none;
      }
    }
  }
  
  @media (max-width: 694px) {
    span {
      font-size: 2rem;
    }

    form {
      input {
        font-size: 1.2rem;
      }

      button {
        font-size: 1.6rem;
      }
    }
  }
`

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  
  &>div {
    width: 50%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3.6rem;
  }

  @media (max-width: 694px) {
    min-height: 60rem;
    
    &>div {
      width: 100%;
    }
  }
  `


export const TextContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  gap: 1.2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  z-index: 2;

  h1 {
    font-size: 2.8rem;
  }
  
  p {
    font-size: 1.6rem;
    line-height: 3.2rem;
    font-style: italic;
  }

  @media (max-width: 694px) {
    color: ${({ theme }) => theme.colors.text2};
  }
  
`
export const ImgContainer = styled.div`
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  @media (max-width: 694px) {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;

    &::before {
      content: '';
      position: absolute;
      background-color: #1d1d1d99;
      height: 100%;
      width: 100%;
    }
  }
`