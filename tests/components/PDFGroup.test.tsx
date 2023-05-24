import React from "react"
import { render, screen } from "@testing-library/react"
import PDFGroup from "../../src/components/PDFGroup"
import { act } from "react-dom/test-utils"

// TODO: Improve tests
describe("PDFGroup component", () => {
  const title = "Editores Abertos"
  const PDFs = ["test.pdf", "test2.pdf"]

  test("should render component", () => {
    render(<PDFGroup title={title} PDFs={PDFs} />)
    expect(screen.getByTestId("pdf-group-wrapper")).toBeInTheDocument()
  })

  test("should render title", () => {
    render(<PDFGroup title={title} PDFs={[]} />)
    expect(screen.getByTestId("pdf-group-header-title")).toBeInTheDocument()
  })

  test("should render PDFs", () => {
    render(<PDFGroup title={title} PDFs={PDFs} />)
    expect(screen.getByTestId("pdf-group-body")).toBeInTheDocument()
  })

  test("should render no pdfs message", () => {
    render(<PDFGroup title={title} PDFs={[]} />)
    const pdfGroup = screen.getByTestId("pdf-group-body")
    expect(pdfGroup).toBeInTheDocument()
    expect(pdfGroup).toHaveTextContent("viewPDF.pdfList.noFiles")
  })

  test("should be default opened", () => {
    render(<PDFGroup title={title} PDFs={PDFs} defaultExpanded />)
    expect(screen.getByTestId("pdf-group-body")).toBeVisible()
  })

  test("should not be default opened", () => {
    render(<PDFGroup title={title} PDFs={PDFs} />)
    expect(screen.getByTestId("pdf-group-body")).not.toBeVisible()
  })

  test("should be opened when clicked", () => {
    render(<PDFGroup title={title} PDFs={PDFs} />)
    const pdfGroup = screen.getByTestId("pdf-group-body")
    expect(pdfGroup).not.toBeVisible()
    act(() => screen.getByTestId("pdf-group-header").click())
    expect(pdfGroup).toBeVisible()
  })
})
