import styled from "styled-components"
import MenuItem from "@mui/material/MenuItem"
import { lightGray, superWhite } from "../../styles/colors"

export const DropdownArea = styled.div`
  margin: 3rem;
  width: 10rem;
  margin: auto;
`

export const Item = styled(MenuItem)`
  background: ${superWhite} !important;
  &:hover {
    background: ${lightGray} !important;
  }
`
