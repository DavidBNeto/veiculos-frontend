import React from "react"
import { BrowserRouter } from "react-router-dom"
import ViewPdf from "../../src/pages/ViewPdf"
import { render, screen } from "@testing-library/react"

describe("view pdf page", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ViewPdf />
      </BrowserRouter>
    )
  })

  test("should render return to home button", () => {
    const button = screen.getByTestId("home-button")
    expect(button).toBeVisible()
  })
})
