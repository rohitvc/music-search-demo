import { fireEvent, render, screen } from "@testing-library/react";
import Dropdown from "../components/Dropdown";

describe("Dropdown.js", () => {
  test("should call setDropdownValue prop when dropdown option is changed", () => {
    const setDropdownValue = jest.fn();
    render(
      <Dropdown
        setDropdownValue={setDropdownValue}
        dropdownValues={{ title: false }}
      />
    );
    const dropdownButton = screen.getByRole("button", {
      name: /search options/i,
    });
    fireEvent.click(dropdownButton);
    fireEvent.click(screen.getByText(/title/i));
    expect(setDropdownValue).toHaveBeenCalledTimes(1);
  });

  test("should change dropdown text value based on dropdownValues prop", () => {
    let dropdownValues = { keywords: false, title: false };
    const setDropdownValue = jest.fn();
    const { rerender } = render(
      <Dropdown
        setDropdownValue={setDropdownValue}
        dropdownValues={dropdownValues}
      />
    );
    const dropdownButton = screen.getByRole("button", {
      name: /search options/i,
    });
    expect(dropdownButton).toHaveTextContent(/^Search options$/);
    fireEvent.click(dropdownButton);
    fireEvent.click(screen.getByText(/title/i));
    expect(setDropdownValue).toHaveBeenCalledWith({
      keywords: false,
      title: true,
    });
    rerender(
      <Dropdown
        setDropdownValue={setDropdownValue}
        dropdownValues={{...dropdownValues, title: true}}
      />
    );
    expect(dropdownButton).toHaveTextContent(/^1 selected$/);
  });
});
