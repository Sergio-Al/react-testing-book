import { render, fireEvent } from "@testing-library/react";
import Checkbox, { AltCheckbox } from "../../components/Checkbox";

test("Selecting the checkbox should change its value", () => {
  const { getByLabelText } = render(<Checkbox />);
  const checkbox = getByLabelText(/not checked/i);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(false);
});

test("Selecting the checkbox without a label should change its value", () => {
  const { getByTestId } = render(<AltCheckbox />);
  const checkbox = getByTestId("checkbox");
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
});
