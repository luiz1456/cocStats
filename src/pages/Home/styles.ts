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
  padding: 1.2rem;
  gap: 2.4rem;

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
      font-size: 2.4rem;
      height: 4.4rem;
      outline: none;
      
      &:focus {
        border: .1rem solid ${({ theme }) => theme.colors.text};
      }

      &:hover {
        border: .1rem solid ${({ theme }) => theme.colors.text};
      }
      
    }
    
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0 .8rem .8rem 0;
      background-color: ${({ theme }) => theme.colors.secundary};
      border: .1rem solid ${({ theme }) => theme.colors.secundary};
      color: ${({ theme }) => theme.colors.text};
      font-size: 2.4rem;
      height: 4.4rem;
      width: 4.4rem;

      &:hover {
        border: .1rem solid ${({ theme }) => theme.colors.text};
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
    color: ${({ theme }) => theme.colors.text};
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
      background-color: ${({ theme }) => theme.colors.transparentBackground};
      height: 100%;
      width: 100%;
    }
  }
`

export const SectionDownload = styled.section`
  background-color: ${({theme}) => theme.colors.background };
  font-family: 'Roboto',sans-serif;
  font-style: italic;
  color: ${({theme}) => theme.colors.text };
  border-top: .1rem solid ${({theme}) => theme.colors.primary };
  
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1.2rem;
  padding: 3.6rem;
  
  button {
    background-color: ${({theme}) => theme.colors.primary };
    color: ${({theme}) => theme.colors.text };
    display: flex;
    align-items: center;
    gap: .8rem;
    padding: 1.2rem;
    border: .1rem solid ${({theme}) => theme.colors.text };
    border-radius: .8rem;
    font-size: 1rem;
    cursor: pointer;
    opacity: .9;
    
    &:hover {
      opacity: 1;
    }

    svg {
      font-size: 2rem;
    }
  }

  .containerText {
    display: flex;
    align-items: center;
    padding: 1.2rem;
    font-size: 2rem;
    grid-row: 1/3;
    border-right: .1rem solid  ${({theme}) => theme.colors.primary };
  }
  
  @media (max-width: 694px) {
    padding-top: 0;
    grid-template-columns: 1fr 1fr;
    
    .containerText {
      font-size: 1.6rem;
      grid-column: 1/3;
      border: none;
    }

    button {
      justify-content: center;
    }
  }
`