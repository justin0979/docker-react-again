import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders learn react link AGAIN", () => {
  render(<App />);
  const linkElement = screen.getByText(/hokey pokey/i);
  expect(linkElement).toBeInTheDocument();
});
