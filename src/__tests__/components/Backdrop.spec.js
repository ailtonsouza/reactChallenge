import React from "react";
import { render } from "@testing-library/react";
import Backdrop from "../../Components/Backdrop";

describe("Backdrop Component", () => {
  it("should be able to load", () => {
    const { debug } = render(<Backdrop />);

    debug();
  });
});
