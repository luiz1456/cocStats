import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
:root {
  font-size: 62.5%; //10 px
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: background-color ease-in 400ms;

  &::-webkit-scrollbar{
    display: none;
  }
}

html, #root, body {
  height: 100%;
}

`