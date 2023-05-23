import { Typography } from "@material-ui/core"
import styled from "styled-components"

export const Wrapper = styled.div`
  gap: 0.5rem;
  display: grid;
`

export const TitleButton = styled.button`
  background: none;
  outline: 0;
  border: 0;

  gap: 0.5rem;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`

export const Title = styled(Typography)`
  font-weight: 400 !important;
  font-size: 1.3rem !important;
`
