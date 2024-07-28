import styled from 'styled-components'

export const Card = styled.div`
  background-color: #1c1c1c;
  display: flex;
  position: relative;
  border-radius: 0.8rem;
  border: 0.4rem solid #000000;
`

export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  .notUnlocked {
    filter: grayscale(1);
  }
`

export const Image = styled.img`
  width: 6rem;
  height: 6rem;
  object-fit: contain;
  border-radius: 0.8rem;
`
