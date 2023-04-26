import styled from "styled-components"
import { Typography } from "@mui/material"
import { superWhite } from "../../styles/colors"

export const Container = styled.div`
  height: 100%;
  gap: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  padding: 0.5rem 1rem;
`

export const Content = styled.div`
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

export const HeaderTitle = styled(Typography)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SubTitle = styled(Typography)`
  justify-content: "flex-start";
  display: flex;
  margin-bottom: 10px !important;
  font-weight: 500 !important;
  color: #676767 !important;
  font-size: 1rem !important;
`

export const FilesWrapper = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
  padding-right: 0.5rem;
  flex-grow: 1;
  overflow-y: auto;
`

export const FilesRow = styled.div`
  display: grid;
  column-gap: 1rem;
  grid-template-columns: calc(100% - 200px - 1rem) 200px;
`

export const SendButton = styled.div`
  display: flex;
  justify-content: center;
`
