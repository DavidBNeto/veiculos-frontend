import React from "react"
import { BrowserRouter } from "react-router-dom"
import NotFound from "../../src/pages/NotFound"
import { render, screen } from "@testing-library/react"

describe("not found page", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
  })

  test("should render 404 title", () => {
    const title = screen.getByTestId("not-found-title")
    expect(title).toBeVisible()
    expect(title).toHaveTextContent("notFound.title")
  })

  test("should render subtitle message", () => {
    const subtitle = screen.getByTestId("not-found-subtitle")
    expect(subtitle).toBeVisible()
    expect(subtitle).toHaveTextContent("notFound.subtitle")
  })

  test("should render return to home button", () => {
    const button = screen.getByTestId("not-found-button")
    expect(button).toBeVisible()
    expect(button).toHaveTextContent("notFound.button")
  })
})
