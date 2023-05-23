import styled from "styled-components"
import { Typography } from "@mui/material"
import {
  green,
  red,
  superWhite,
  text,
  darkerGray,
  blue,
} from "../../styles/colors"

const borderRadius = "6.18px"

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 15px 30px;
  background-color: ${superWhite};
  border-radius: ${borderRadius};
  align-items: center;
  width: 100%;
  height: 100%;
  &[data-selected="true"] {
    background-color: ${blue};
    color: ${superWhite};
  }
  &::after {
    position: absolute;
    top: 65px;
    color: ${text};
    content: attr(data-updated);
  }
`
export const Title = styled(Typography)`
  font-size: 18.55px !important;
  line-height: 27.8px !important;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
export const Icone = styled.div`
  font-size: 18.55px !important;
  line-height: 27.8px !important;
  position: absolute;
  top: -10px;
  left -10px;

  > svg {
    transition: 450ms;
  }
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
export const ConcludedComponentWrapper = styled(Icone)`
  > svg {
    fill: ${green};
  }
`
export const UnfinishedComponentWrapper = styled(Icone)`
  > svg {
    fill: ${red};
  }
`
export const NotOpenComponentWrapper = styled(Icone)`
  > svg {
    fill: ${darkerGray};
  }
`
export const ExportFileWrapper = styled(Icone)`
  right: 0;
  position: static;
  > svg {
    fill: ${darkerGray};
  }
`
