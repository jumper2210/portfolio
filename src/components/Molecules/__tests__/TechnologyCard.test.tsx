import React from "react"
import TechnologyCard from "../../organisms/TechnologyCards/TechnologyCard"
// @ts-ignore
import { render } from "../../../../jest-configs/test-utils"

const example = {
  title: "test title",
  description: "test description",
  technologies: [
    {
      name: "technology icon",
      icon: {
        publicUr: "icon url",
      },
    },
  ],
}

describe("TechnologyCard", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <TechnologyCard
        title={example.title}
        description={example.description}
        technologies={example.technologies}
      />
    )
    const technologyCard = container.querySelector("article")
    expect(technologyCard).toBeInTheDocument()
  })
  it("displays every prop", () => {
    const { container } = render(
      <TechnologyCard
        title={example.title}
        description={example.description}
        technologies={example.technologies}
      />
    )

    const title = container.querySelector("h5")
    const description = container.querySelector("p")
    const technology = container.querySelector("li")
    expect(title).toHaveTextContent("test title")
    expect(description).toHaveTextContent("test description")
    expect(technology).toHaveTextContent("technology icon")
  })
})
