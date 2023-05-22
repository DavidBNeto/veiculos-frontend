import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import WarningIcon from "@mui/icons-material/Warning"
import ContentPasteOffIcon from "@mui/icons-material/ContentPasteOff"
import FileDownloadIcon from "@mui/icons-material/FileDownload"
import {
  Wrapper,
  Title,
  ConcludedComponentWrapper,
  UnfinishedComponentWrapper,
  NotOpenComponentWrapper,
  ExportFileWrapper,
} from "./styles"
import { PDFComponentProps, Status } from "./types"

const ConcludedComponent = () => (
  <ConcludedComponentWrapper>
    <CheckCircleIcon />
  </ConcludedComponentWrapper>
)

const UnfinishedComponent = () => (
  <UnfinishedComponentWrapper>
    <WarningIcon />
  </UnfinishedComponentWrapper>
)

const NotOpenComponent = () => (
  <NotOpenComponentWrapper>
    <ContentPasteOffIcon />
  </NotOpenComponentWrapper>
)

const ExportFile = () => (
  <ExportFileWrapper>
    <FileDownloadIcon />
  </ExportFileWrapper>
)

const Icone = ({ status }: { status: Status }) => {
  switch (status) {
    case "concluded":
      return <ConcludedComponent />
    case "unfinished":
      return <UnfinishedComponent />
    case "notOpen":
      return <NotOpenComponent />
    default:
      return <NotOpenComponent />
  }
}
const PDFComponent = ({ fileName, status, isSelected }: PDFComponentProps) => {
  return (
    <Wrapper
      data-status={status}
      data-updated="Última edição em:"
      data-selected={isSelected}
    >
      <Icone status={status} />
      <Title variant="h2">{fileName}</Title>
      <ExportFile />
    </Wrapper>
  )
}

export default PDFComponent
