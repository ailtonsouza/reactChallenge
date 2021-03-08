import React from "react";
import { render } from "@testing-library/react";
import Products from "../../Components/Products";

describe("Products Component", () => {
  it("should be able to load", () => {
    const { debug } = render(<Products />);

    debug();
  });
});
