import React from "react";
import { render } from "@testing-library/react";
import ShopPage from "../../Pages/ShopPage";

describe("Shop Page", () => {
  it("should be able to load", () => {
    const { debug } = render(<ShopPage />);

    debug();
  });
});
