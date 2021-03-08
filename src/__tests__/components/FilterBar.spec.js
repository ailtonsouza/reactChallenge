import React from "react";
import { render } from "@testing-library/react";
import FilterBar from "../../Components/FilterBar";

describe("Backdrop Component", () => {
  it("should be able to load", () => {
    const { debug } = render(<FilterBar />);

    debug();
  });
});
