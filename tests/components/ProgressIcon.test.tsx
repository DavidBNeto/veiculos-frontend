import React from "react"
import { screen, render } from "@testing-library/react"
import ProgressIcon from "../../src/components/ProgressIcon"

describe("progress icon component", () => {
  test("should render the component with loading state", () => {
    render(<ProgressIcon progress="extracting" />)

    const element = screen.getByTestId("extracting")
    expect(element).toBeInTheDocument()
  })

  test("should render the component with failed state", () => {
    render(<ProgressIcon progress="fail" />)

    const element = screen.getByTestId("fail")
    expect(element).toBeInTheDocument()
  })

  test("should render the progress icon component with success state", () => {
    render(<ProgressIcon progress="success" />)

    const element = screen.getByTestId("success")
    expect(element).toBeInTheDocument()
  })
})
