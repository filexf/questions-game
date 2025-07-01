import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the question", () => {
  render(<App />);
  expect(screen.getByText(/Do you like React/i)).toBeInTheDocument();
});
