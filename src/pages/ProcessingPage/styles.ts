import styled from "styled-components"
import Typography from "@mui/material/Typography"
import { CircularProgress } from "@mui/material"
import CloudDoneIcon from "@mui/icons-material/CloudDone"
import { darkGray, lightGray } from "../../styles/colors"

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20rem;
  padding: 0 1rem;
`
export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  width: 100%;
  height: 100%;
`

export const Loading = styled(CircularProgress)`
  height: 100px !important;
  width: 100px !important;
  margin-bottom: 1rem;
`

export const SuccessIcon = styled(CloudDoneIcon)`
  height: 100px !important;
  width: 100px !important;
  margin-bottom: 1rem;
  color: green;
`

export const ButtonWrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
`
export const Title = styled(Typography)`
  font-size: 1.5rem !important;
  font-weight: 500 !important;
`

export const SuccessTitle = styled(Typography)`
  font-size: 1.5rem !important;
  font-weight: 500 !important;
  color: green;
`

export const Subtitle = styled(Typography)`
  display: flex;
  font-size: 1rem !important;
  font-weight: 400 !important;
  color: ${darkGray};
`
export const SectionTitle = styled(Typography)`
  font-weight: 600 !important;
  color: ${darkGray};
  margin-bottom: 0.5rem !important;
`
export const PdfStatus = styled.div`
  width: 100%;
  padding: 10px;
  border: solid ${lightGray} 0.5px;
  border-radius: 6px;
  margin-bottom: 0.5rem;
`

export const PdfTitle = styled(Typography)`
  font-size: 0.8rem !important;
  margin-bottom: 0.5rem !important;
`
