import styled from "styled-components"
import AppBar from "@mui/material/AppBar"
import Tab from "@mui/material/Tab"
import { mediumGray } from "../../styles/colors"

export const TabSelected = styled(Tab)`
  background: "#fff" !important;
  color: "#000" !important;
`

export const TabsWrapper = styled(AppBar)`
  background: ${mediumGray} !important;
`
