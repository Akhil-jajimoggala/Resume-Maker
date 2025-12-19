import { render, screen, fireEvent } from "@testing-library/react";
import CustomSectionHandler from "../components/CustomSectionHandler";

describe("CustomSectionHandler", () => {
  const sections = [
    { id: "projects", title: "Projects", entries: [] },
    { id: "skills", title: "Skills", entries: [] },
  ];

  it("renders provided custom sections", () => {
    render(<CustomSectionHandler sections={sections} />);
    sections.forEach((section) => {
      expect(screen.getByText(section.title)).toBeInTheDocument();
    });
  });

  it("adds an entry to a section", () => {
    const onUpdate = jest.fn();
    render(
      <CustomSectionHandler sections={sections} onUpdate={onUpdate} />
    );
    const addBtn = screen.getByTestId("add-entry-projects");
    fireEvent.click(addBtn);
    expect(onUpdate).toHaveBeenCalledWith(
      expect.objectContaining({
        id: "projects",
        entries: expect.any(Array),
      })
    );
  });

  it("removes an entry from a section", () => {
    const updatedSections = [
      { id: "projects", title: "Projects", entries: ["Example"] },
    ];
    const onUpdate = jest.fn();
    render(
      <CustomSectionHandler
        sections={updatedSections}
        onUpdate={onUpdate}
      />
    );
    fireEvent.click(screen.getByTestId("remove-entry-projects-0"));
    expect(onUpdate).toHaveBeenCalledWith(
      expect.objectContaining({
        id: "projects",
        entries: [],
      })
    );
  });
});
