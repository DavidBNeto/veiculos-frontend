import React from "react"
import { render, screen } from "@testing-library/react"
import PDFList from "../../src/components/PDFList"
import { PDF } from "../../src/components/PDFList/types"

// TODO: Improve tests
describe("PDF List component", () => {
  const PDFs: PDF[] = [
    {
      name: "PDF 1",
      status: "Concluído",
      lastSeen: new Date(),
    },
    {
      name: "Clique em mim!",
      status: "Não aberto",
      lastSeen: new Date(),
    },
    {
      name: "Não, em mim!",
      status: "Pendente",
      lastSeen: new Date(),
    },
  ]
  const onClick = (_: PDF) => {}
  
  beforeEach(() => {
    render(<PDFList
      PDFs={PDFs}
      onPDFclick={onClick}
    />)
  })

  test("should render the PDF List component")
})
