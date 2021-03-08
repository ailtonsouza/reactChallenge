import React from "react";
import { render } from "@testing-library/react";
import CartItem from "../../Components/CartItem";

describe("CartItem Component", () => {
  it("should be able to load", () => {
    const { debug } = render(<CartItem />);

    debug();
  });
});
