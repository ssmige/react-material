import Card from "./Card";
import { render } from "@testing-library/react";

describe("Card component", () => {
  it("should render without errors", () => {
    render(<Card />);
  });
});
