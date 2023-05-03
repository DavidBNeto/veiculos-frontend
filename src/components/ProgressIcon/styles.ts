import { Typography } from "@mui/material"
import styled from "styled-components"
import { green, red, darkerGray } from "../../styles/colors"

export const Wrapper = styled.div`
  display: grid;
  justify-items: center;
`
export const IconWrapper = styled.div`
  > svg {
    height: 8rem;
    width: 8rem;
  }
`
export const LoadingWrapper = styled.div`
  &,
  > * {
    display: grid;
  }
  justify-content: center;
  margin-bottom: 1rem;
`
export const Title = styled(Typography)`
  font-size: 1.4rem !important;
  font-weight: 550 !important;
  &[data-progress="success"] {
    color: ${green};
  }
  &[data-progress="fail"] {
    color: ${red};
  }
  &[data-progress="extracting"] {
    color: ${darkerGray};
  }
`
