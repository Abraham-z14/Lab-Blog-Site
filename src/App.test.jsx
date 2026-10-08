import { test, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./components/Header";

test("renders the blog name passed as a prop", () => {
  render(<Header name="Test Blog" />);

  expect(
    screen.getByRole("heading", { name: "Test Blog" })
  ).toBeInTheDocument();
});