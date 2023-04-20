import styled from "styled-components"
import { Typography } from "@mui/material"
import { superWhite } from "../../styles/colors"

export const Container = styled.div`
  height: 100%;
  gap: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Content = styled.div`
  width: 60%;
  height: 80%;
  background: ${superWhite};
  border-radius: 4px;
  padding: 1.5rem;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  overflow: auto;
`

export const FilesWrapper = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
  padding-right: 0.5rem;
  overflow: auto;
`

export const FilesRow = styled(FilesWrapper)`
  flex-direction: row;
`

export const HeaderTitle = styled(Typography)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SelectedFiles = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 60px 60px 60px;
  overflow-y: auto;
  max-height: 30%;
`

export const SubTitle = styled(Typography)`
  justify-content: "flex-start";
  display: flex;
  margin-bottom: 10px !important;
  font-weight: 500 !important;
  color: #676767 !important;
  font-size: 1rem !important;
  margin: 10px 60px 0px !important;
`

export const SendButton = styled.div`
  display: flex;
  justify-content: center;
`
