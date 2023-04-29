import DeleteIcon from "@mui/icons-material/Delete"
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress"
import LinearProgress from "@mui/material/LinearProgress"
import {
  DeleteComponentProps,
  FileLoadingProps,
  LoadingIconBarProps,
  LoadingIconSpinProps,
} from "./types"
import { Wrapper, Title, DeleteButton } from "./styles"
import { blue } from "../../styles/colors"

// Infinitely spinning progress for file download
export const LoadingIconSpin = ({
  animationDuration = "1100ms",
  size = 30,
  thickness = 4,
}: Partial<LoadingIconSpinProps>) => (
  <CircularProgress
    // indeterminate = scrolls indefinetly
    variant="indeterminate"
    sx={{
      color: { blue },
      animationDuration,
      [`& .${circularProgressClasses.circle}`]: {
        // Define if edges of the spinner are rounded or not
        strokeLinecap: "round",
      },
    }}
    size={size}
    thickness={thickness}
  />
)

// Infinitely scrolling progress for file upload
const LoadingIconBar = ({ isLoaded }: LoadingIconBarProps) => {
  const variant = isLoaded ? "determinate" : "indeterminate"
  return (
    <div className="loading-icon-bar">
      {/* value only affects the display if variant is indeterminate (infinite) */}
      <LinearProgress variant={variant} value={100} />
    </div>
  )
}

const DeleteComponent = ({ index, handleClick }: DeleteComponentProps) => (
  <DeleteButton onClick={() => handleClick(index)}>
    <DeleteIcon />
  </DeleteButton>
)

const FileLoading = ({
  fileName,
  status,
  isLoaded,
  index = 0,
  handleDeleteClick,
}: FileLoadingProps) => {
  const isSpin = status === "downloading"
  const isDeletable = status === "downloaded" && !!handleDeleteClick
  const isBar = status === "uploading"

  return (
    <Wrapper data-status={status}>
      <Title variant="h2">{fileName}</Title>
      {isSpin && <LoadingIconSpin />}
      {isDeletable && (
        <DeleteComponent index={index} handleClick={handleDeleteClick} />
      )}
      {isBar && <LoadingIconBar isLoaded={!!isLoaded} />}
    </Wrapper>
  )
}

export default FileLoading
