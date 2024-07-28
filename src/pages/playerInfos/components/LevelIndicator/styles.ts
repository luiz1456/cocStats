import styled from 'styled-components'

function getBgColor(variant: 'isMaximized' | 'notMaximized') {
  if (variant === 'isMaximized') {
    return '#0000ff'
  } else {
    return '#a6410d'
  }
}

export const LevelIndicatorContainer = styled.div<{
  $variant: 'isMaximized' | 'notMaximized'
}>`
  width: 2rem;
  height: 2rem;
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0.8rem ${({ $variant }) => getBgColor($variant)};
  background-color: ${({ $variant }) => getBgColor($variant)};
  position: absolute;
  bottom: 0.4rem;
  right: 0.4rem;

  span {
    color: #ffffff;
    font-family: sans-serif;
    font-size: 1.4rem;
    text-shadow: 0.1rem 0.1rem 0.1rem #000000;
    font-weight: 600;
  }
`
