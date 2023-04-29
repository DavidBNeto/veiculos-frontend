import React from "react"
import { render } from "@testing-library/react"
import ExtractProgress from "../src/components/ExtractProgress"
import { ExtractProgressProps } from "../src/components/ExtractProgress/types"

const renderExtractProgressComponent = ({ progress }: ExtractProgressProps) => {
  return render(<ExtractProgress progress={progress} />)
}

describe("<ExtractProgress progress='extracting' />", () => {
  beforeEach(() => {
    renderExtractProgressComponent({ progress: "extracting" })
  })

  test("should render extracting state")
})

describe("<ExtractProgress progress='success' />", () => {
  beforeEach(() => {
    renderExtractProgressComponent({ progress: "success" })
  })

  test("should render success state")
})

describe("<ExtractProgress progress='fail' />", () => {
  beforeEach(() => {
    renderExtractProgressComponent({ progress: "fail" })
  })

  test("should render fail state")
})
