import { createGlobalStyle } from "styled-components"
import { background, gray, lightGray, darkGray } from "./colors"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 14px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    background: ${background};
  }

  html, body, #root {
    height: 100%;
  }

  ::-webkit-scrollbar {
    width: 0.5rem;

    &-track, &-thumb {
      border-radius: 1rem;
    }

    &-track {
      background: ${lightGray};
    }

    &-thumb {
      background: ${gray};
      &:hover {
        background: ${darkGray};
      }
    }
  }
`
