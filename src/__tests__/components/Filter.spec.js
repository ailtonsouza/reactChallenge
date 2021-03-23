import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Filter from "../../Components/Filter";
import Selector from "../../Components/Selector";
import customSelectors from "../../hooks/customSelectors";

test('Render a label without id "Filled" and with "Filled"', () => {
  const value = [
    {
      label: "Price",
      inputValue: 100,
      valor: "Bigger Than",
    },
  ];

  const { getByLabelText } = render(
    <Filter
      label="number"
      type="number"
      filters={value}
      setFilters={() => jest.fn()}
    />
  );
  const input = getByLabelText("number");

  expect(document.getElementById("Filled")).not.toBeInTheDocument();

  fireEvent.change(input, {
    target: { value: 10 },
  });

  expect(document.getElementById("Filled")).toBeInTheDocument();
});

test('Render the button type alphabeticall, with text "x"', () => {
  const values = [
    {
      label: "Sort alphabeticall?",
      inputValue: null,
      valor: "Filter",
    },
    {
      label: "Price",
      inputValue: 100,
      valor: "Bigger Than",
    },
  ];

  const { getByTestId } = render(
    <Filter
      label="Sort alphabeticall?"
      type="alphabeticall"
      filters={values}
      setFilters={() => jest.fn()}
    />
  );
  const button = getByTestId("button");
  expect(button.innerHTML).toBe("x");
});

test('Render the button type number, with text "="', () => {
  const { getByTestId } = render(
    <Filter type="math" setFilters={() => jest.fn()} />
  );
  const button = getByTestId("button");
  expect(button.innerHTML).toBe("=");
});

test("Show and hide selector painel", () => {
  const { mathSimbols } = customSelectors();

  const { getByTestId, queryByTestId } = render(
    <Filter
      setFilters={jest.fn()}
      children={<Selector type="number" selectors={mathSimbols} />}
    />
  );
  const button = getByTestId("button");
  fireEvent.click(button);
  expect(queryByTestId("painel")).toBeInTheDocument();
  fireEvent.click(button);
  expect(queryByTestId("painel")).not.toBeInTheDocument();
});
