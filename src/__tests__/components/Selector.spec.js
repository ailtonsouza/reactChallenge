import React from "react";
import { render } from "@testing-library/react";
import Selector from "../../Components/Selector";

describe("Selector Component", () => {
  it("should be able to load", () => {
    const { debug } = render(<Selector />);

    debug();
  });
});
