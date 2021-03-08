import React from "react";
import { render } from "@testing-library/react";
import Filter from "../../Components/Filter";

describe("Filter Component", () => {
  it("should be able to load", () => {
    const { debug } = render(<Filter />);

    debug();
  });
});
