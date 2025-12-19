import { render, screen, fireEvent } from "@testing-library/react";
import TemplateSelector from "../components/TemplateSelector";

const mockTemplates = [
  { id: "template1", name: "Classic" },
  { id: "template2", name: "Modern" },
];

describe("TemplateSelector", () => {
  it("renders all available templates", () => {
    render(<TemplateSelector templates={mockTemplates} onSelect={() => {}} />);
    mockTemplates.forEach((tpl) => {
      expect(screen.getByText(tpl.name)).toBeInTheDocument();
    });
  });

  it("highlights currently selected template", () => {
    render(
      <TemplateSelector
        templates={mockTemplates}
        selected="template2"
        onSelect={() => {}}
      />
    );
    const selectedBtn = screen.getByTestId("template-template2");
    expect(selectedBtn).toHaveClass("selected");
  });

  it("calls onSelect with correct id when a template is clicked", () => {
    const onSelect = jest.fn();
    render(<TemplateSelector templates={mockTemplates} onSelect={onSelect} />);
    fireEvent.click(screen.getByText("Classic"));
    expect(onSelect).toHaveBeenCalledWith("template1");
  });
});
