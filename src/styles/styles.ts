import styled, { createGlobalStyle } from "styled-components"
import { Typography } from "@mui/material"
import {
  superWhite,
  background,
  gray,
  lightGray,
  darkGray,
  text,
} from "./colors"

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

  a {
    text-decoration: none;
    color: ${text};
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

const Container = styled.div`
  height: 100%;
  gap: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  padding: 0.5rem 1rem;
`

const Content = styled.div`
  width: min(100%, 800px);
  height: clamp(600px, 80%, 1000px);
  background: ${superWhite};
  border-radius: 4px;
  padding: 1.5rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  overflow: auto;
`

const HeaderTitle = styled(Typography)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export { Container, Content, HeaderTitle }
