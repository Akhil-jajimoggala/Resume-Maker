import { render, screen, fireEvent } from "@testing-library/react";
import JSONImporter from "../components/JSONImporter";

describe("JSONImporter", () => {
  const validJson = { basics: { name: "John Doe" } };

  it("renders file input", () => {
    render(<JSONImporter onImport={() => {}} />);
    expect(screen.getByTestId("json-input")).toBeInTheDocument();
  });

  it("calls onImport if JSON is valid", async () => {
    const onImport = jest.fn();
    render(<JSONImporter onImport={onImport} />);
    const file = new File(
      [JSON.stringify(validJson)],
      "resume.json",
      { type: "application/json" }
    );
    const input = screen.getByTestId("json-input");
    await fireEvent.change(input, { target: { files: [file] } });
    expect(onImport).toHaveBeenCalledWith(validJson);
  });

  it("shows error for invalid JSON", async () => {
    render(<JSONImporter onImport={() => {}} />);
    const file = new File(["invalid-json"], "bad.json", {
      type: "application/json",
    });
    const input = screen.getByTestId("json-input");
    await fireEvent.change(input, { target: { files: [file] } });
    expect(screen.getByText(/Error loading file/i)).toBeInTheDocument();
  });
});
