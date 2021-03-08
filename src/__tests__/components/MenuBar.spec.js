import React from "react";
import { render } from "@testing-library/react";
import MenuBar from "../../Components/MenuBar";

describe("MenuBar Component", () => {
  it("should be able to load", () => {
    const { debug } = render(<MenuBar />);

    debug();
  });
});
