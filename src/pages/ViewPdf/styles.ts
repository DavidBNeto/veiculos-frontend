import styled from "styled-components"
import { Button } from "@mui/material"
import { backgroundBlue } from "../../styles/colors"

export const PageWrapper = styled.div`
  height: 100%;
  position: relative;
  gap: 1rem;
  display: flex;
  flex-wrap: wrap;
  background-color: ${backgroundBlue};

  padding: 4rem 6rem;

  > div:first-of-type {
    min-width: 450px;
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

export const SaveButton = styled(Button)`
  position: absolute !important;
  top: 70px;
  right: 105px;
  width: 100px;
  height: 45px;
  outline: 0;
  border: 0;

  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
  }
`
