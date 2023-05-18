import styled from "styled-components"
import { backgroundBlue } from "../../styles/colors"

const PageWrapper = styled.div`
  height: 100%;

  gap: 1rem;
  display: flex;
  flex-wrap: wrap;
  background-color: ${backgroundBlue};

  padding: 4rem 6rem;

  > div:first-of-type {
    min-width: 450px;
    outline: 2px solid red;
  }

  > div:last-of-type {
    flex: 1;
    min-width: 650px;
    outline: 2px solid green;
  }

  @media screen and (max-width: 1308px) {
    > div:first-of-type {
      width: 100%;
    }
  }

  @media screen and (max-width: 800px) {
    > div {
      display: none;
    }

    &::after {
      content: "Página não disponível para telas menores de 800px : (";
      width: 100%;

      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;

      font-size: 1.5rem;
    }
  }
`

export default PageWrapper
