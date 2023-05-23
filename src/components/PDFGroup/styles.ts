import MuiAccordionDetails from "@mui/material/AccordionDetails"
import { Typography } from "@material-ui/core"
import styled_c from "styled-components"
import { styled } from "@mui/material/styles"

export const Title = styled_c(Typography)`
  font-weight: 400 !important;
  font-size: 1.3rem !important;
`

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  "& > * + *": {
    marginTop: theme.spacing(2),
  },
}))
