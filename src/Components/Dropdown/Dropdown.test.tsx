import { fireEvent, render, screen } from "@testing-library/react";
import Dropdown from "./Dropdown";
const onchangeHandler = jest.fn();
const dropdownOptions = [
  {
    id: 0,
    name: "first",
  },
  {
    id: 1,
    name: "second",
  },
  {
    id: 2,
    name: "third",
  },
];

test("renders select element correctly with labelText", () => {
  render(
    <Dropdown
      name="select-name"
      value=""
      onChangeHandler={onchangeHandler}
      labelText="this is selectBox"
      options={[]}
    />
  );
  const DropdownComponentElement = screen.getByLabelText(/select-options/);
  const labelSelectElement = screen.getByText(/this is selectBox/i);
  expect(labelSelectElement).toBeInTheDocument();
  expect(DropdownComponentElement).toBeInTheDocument();
});

test("renders first value correctly and disabled when passed selectText as props", () => {
  render(
    <Dropdown
      value=""
      selectText={"select option"}
      onChangeHandler={onchangeHandler}
      name="select-name"
      options={dropdownOptions}
      labelText=""
    />
  );
  const DropdownComponentElement = screen.getByLabelText(/select-options/);

  expect(DropdownComponentElement).toHaveValue("");
  expect(screen.getByText("select option")).toBeDisabled();
});

test("renders select default value correctly when pass as props", () => {
  render(
    <Dropdown
      value={"2"}
      options={dropdownOptions}
      onChangeHandler={onchangeHandler}
      name="select-name"
      labelText="this is textbox"
    />
  );
  const DropdownComponentElement = screen.getByLabelText(/select-options/);
  expect(DropdownComponentElement).toHaveValue("2");
});

test("renders select value correctly on onchange handler", () => {
  render(
    <Dropdown
      options={dropdownOptions}
      value={"0"}
      onChangeHandler={onchangeHandler}
      name="select-name"
      labelText=""
    />
  );
  const selectInputElement = screen.getByLabelText(/select-options/);
  fireEvent.change(selectInputElement, { target: { value: "2" } });
  expect(selectInputElement).toHaveValue("2");
});
