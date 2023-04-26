import styled from "styled-components"
import FileUploadIcon from "@mui/icons-material/FileUpload"
import Typography from "@mui/material/Typography"
import {
  background,
  darkGray,
  defaultMessage,
  errorMessage,
  link,
  successMessage,
} from "../../styles/colors"

const messageColors: any = {
  default: defaultMessage,
  error: errorMessage,
  success: successMessage,
}

export const BoxArea = styled.div.attrs({
  className: "dropzone",
})`
  display: flex;
  background-color: ${(props: any) =>
    messageColors[props.type] || messageColors.default};
  align-items: center;
  justify-content: center;
  padding: 4em;
  border: 2px dashed ${background};
  border-radius: 6px;
  cursor: pointer;
  min-height: 10rem;
  height: ${(props: any) => (props.size ? "40%" : "100%")};
  overflow: hidden;
  transition: height 0.2s ease;
`

export const BoxAreaMessages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const BoxAreaTitle = styled(Typography).attrs((props: any) => ({
  type: props.type,
}))`
  font-size: 1rem !important;
  font-weight: 700 !important;

  b {
    color: ${link};
    text-decoration: underline;
  }
`

export const BoxAreaSubtitle = styled(Typography)`
  display: flex;
  font-size: 1rem !important;
  font-weight: 400 !important;
  color: ${darkGray};
`

export const UploadIcon = styled(FileUploadIcon)`
  height: 6rem !important;
  width: 6rem !important;
  color: ${link};

  @media screen and (max-height: 400px) {
    display: none !important;
  }
`
