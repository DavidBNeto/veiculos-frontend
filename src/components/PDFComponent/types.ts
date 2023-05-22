export type Status = "concluded" | "unfinished" | "notOpen"

export type PDFComponentProps = {
  fileName: string
  status: Status
  isSelected: boolean
}
