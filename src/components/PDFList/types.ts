export type PDFStatus = "Não aberto" | "Pendente" | "Concluído"

export type PDF = {
  name: string
  status: PDFStatus
  lastSeen: Date
  // TODO: Change to Vehicle type
  vehicles?: object[]
}

export interface PDFListProps {
  /** PDFs to be displayed */
  PDFs: PDF[]
  /** Should move PDFs state to 'active' and to open editors tab */
  onPDFclick: (PDF: PDF) => void
  /** Should move PDF to complete files tab */
  // TODO: implement
  // onPDFchange: (PDF: PDF) => void
}
