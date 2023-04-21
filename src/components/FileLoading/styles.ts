import styled from "styled-components"
import { Typography } from "@mui/material"
import {
  background,
  green,
  red,
  superWhite,
  text,
  white,
} from "../../styles/colors"

const borderRadius = "6.18px"

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  position: relative;

  gap: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 15px 20px;
  background-color: ${superWhite};
  border: ${background} 1.55px solid;
  border-radius: ${borderRadius};

  &[data-status="uploaded"] {
    border: 2.325px solid ${green};
    border-radius: ${borderRadius};
  }

  .loading-icon-bar > span {
    position: absolute;

    left: 0;
    bottom: 0;
    height: 4px;
    width: 100%;
    border-bottom-left-radius: ${borderRadius};
    border-bottom-right-radius: ${borderRadius};
  }
`

export const DeleteButton = styled.button`
  /* Default button reset */
  border: 0;
  outline: 0;

  width: 35px;
  height: 35px;
  padding: 5px;

  border-radius: 50%;
  background: ${white};

  transition: 450ms;

  > svg {
    fill: ${red};
    transition: 450ms;
  }

  &:hover,
  &:active,
  &:focus {
    cursor: pointer;
    > svg {
      fill: ${white};
    }
    background: ${red};
  }
`

export const Title = styled(Typography)`
  font-size: 18.55px !important;
  line-height: 27.8px !important;
  color: ${text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
