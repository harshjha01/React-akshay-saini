import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
// test("shoud render contact page ", () => {
//   render(<Contact />);
//   const heading = screen.getByRole("heading");
//   expect(heading).toBeInTheDocument();
// });
test("Should load Contact component", () => {
  render(<Contact />);

  const heading = screen.getAllByRole("heading");

  // * Assertion
  expect(heading).toHaveLength(2);
});
