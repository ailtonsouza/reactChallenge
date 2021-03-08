import React from "react";
import { render } from "@testing-library/react";
import ModalCart from "../../Components/ModalCart";

describe("ModalCart Component", () => {
  it("should be able to load", () => {
    const { debug } = render(<ModalCart />);

    debug();
  });
});
