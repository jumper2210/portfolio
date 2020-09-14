import React from "react"
import Project from "../../../components/organisms/Projects/Project"
// @ts-ignore
import { render } from "../../../../jest-configs/test-utils"

const example = {
  title: "test title",
  description: "test description",
  demoLink: "test demo link",
  codeLink: "test code link",
  image: {
    aspectRatio: 1.4,
    sizes: "(max-width: 850px) 100vw, 850px",
    src: "../../../assets/images/comics_viewer.png",
    srcSet:
      "../../../assets/images/comics_viewer.png 221w,\n../../../assets/images/comics_viewer.png 525w,\n../../../assets/images/comics_viewer.png 850w,\n../../../assets/images/comics_viewer.png 1370w,\n../../../assets/images/comics_viewer.png 1404w",
    tracedSVG:
      "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='850'%20height='571'%20v…-3-3'%20fill='%23d3d3d3'%20fill-rule='evenodd'/%3e%3c/svg%3e",
  },
}

describe("Project", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Project
        title={example.title}
        description={example.description}
        demoLink={example.demoLink}
        codeLink={example.codeLink}
        image={example.image}
      />
    )
    const project = container.querySelector("article")
    expect(project).toBeInTheDocument()
  })
  it("displays every prop", () => {
    const { container, getByText } = render(
      <Project
        title={example.title}
        demoLink={example.demoLink}
        codeLink={example.codeLink}
        image={example.image}
        description={example.description}
      />
    )

    const title = container.querySelector("h4")
    const description = container.querySelector("p")
    const codeLink = getByText(/code/i)
    const demoLink = getByText(/demo/i)
    expect(title).toHaveTextContent("test title")
    expect(description).toHaveTextContent("test description")
    expect(codeLink).toHaveAttribute("href", "test code link")
    expect(demoLink).toHaveAttribute("href", "test demo link")
  })
})
