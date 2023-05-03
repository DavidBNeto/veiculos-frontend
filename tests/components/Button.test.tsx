import React from "react"
import { render, screen } from "@testing-library/react"
import Button from "../../src/components/Button"

describe("button component", () => {
  test("should render the button component with the color blue", () => {
    render(<Button color="blue" text="Test" onClick={() => {}} />)

    const element = screen.getByTestId("custom-button")
    expect(element).toBeInTheDocument()
    expect(element).toHaveStyle(`background-color: rgb(25, 118, 210)`)
  })

  test("should render the button component with the error color", () => {
    render(<Button color="red" text="Test" onClick={() => {}} />)

    const element = screen.getByTestId("custom-button")
    expect(element).toBeInTheDocument()
    expect(element).toHaveStyle(`background-color: rgb(211, 47, 47)`)
  })
})
