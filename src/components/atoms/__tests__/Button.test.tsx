import React from "react"
import Button from "../../../components/atoms/CustomButton/CustomButton"
// @ts-ignore
import { render } from "../../../../jest-configs/test-utils"

describe("Button", () => {
  it("renders text properly", () => {
    const { getByText } = render(<Button>test</Button>)
    const button = getByText(/test/i)
    expect(button).toBeInTheDocument()
  })
})
