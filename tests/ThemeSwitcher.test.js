import { render, screen, fireEvent } from "@testing-library/react";
import {ThemeContext} from "../context/ThemeContext";

describe("ThemeContext", () => {
  it("renders the toggle switch", () => {
    render(<ThemeContext theme="light" onToggle={() => {}} />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("shows correct initial state for light mode", () => {
    render(<ThemeContext theme="light" onToggle={() => {}} />);
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  it("toggles to dark mode on click", () => {
    const onToggle = jest.fn();
    render(<ThemeContext theme="light" onToggle={onToggle} />);
    fireEvent.click(screen.getByRole("checkbox"));
    expect(onToggle).toHaveBeenCalledWith("dark");
  });

  it("toggles back to light mode from dark", () => {
    const onToggle = jest.fn();
    render(<ThemeContext theme="dark" onToggle={onToggle} />);
    fireEvent.click(screen.getByRole("checkbox"));
    expect(onToggle).toHaveBeenCalledWith("light");
  });
});
