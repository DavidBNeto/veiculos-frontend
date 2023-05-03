export type LoadingIconBarProps = {
  /** should bar be static */
  isLoaded: boolean
}

export type Status =
  | /** When file is being send from user to client */ "downloading"
  | /** When client has downloaded the file */ "downloaded"
  | /** While awaiting for server response */ "uploading"
  | /** When server returned response */ "uploaded"
  | /** Case something goes wrong */ "failed"

export type FileLoadingProps = {
  /** file name */
  fileName: string

  /** status = which state of the process we are currently (download, loaded, uploaded...) */
  status: Status

  /** has uploaded to server and back */
  isLoaded?: boolean

  /** index of the file in the array */
  index?: number

  /** for the "dowloaded" state */
  handleDeleteClick?: (index: number) => void
}

export type DeleteComponentProps = {
  /** index of the file to be deleted */
  index: number

  /** function to be called when delete button is clicked */
  handleClick: (index: number) => void
}

export type LoadingIconSpinProps = {
  /** duration in ms (ex: 1100ms) */
  animationDuration: string

  /** size of the icon */
  size: number

  /** width of the icon */
  thickness: number
}
