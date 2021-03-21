import { fireEvent, render, screen } from "@testing-library/react";
import Search from "../components/Search";
import userEvent from "@testing-library/user-event";

describe("Search.js", () => {
  test("should call onSearchChange prop when search input value is changed", () => {
    const onSearchChange = jest.fn();
    render(<Search onSearchChange={onSearchChange} search={""} />);
    const searchInput = screen.getByRole("textbox", {
      name: /search/i,
    });

    userEvent.type(searchInput, "test");
    expect(onSearchChange).toHaveBeenCalledTimes(4);
  });

  test("should call onSearchSubmit prop when submit button is clicked",  () => {
    const onSearchSubmit = jest.fn();
    const onSearchChange = jest.fn()
    render(<Search onSearchSubmit={onSearchSubmit} onSearchChange={onSearchChange} search={""} />);
    const searchButton = screen.getByRole("button", {
      name: /search/i,
    });

    fireEvent.click(searchButton);

    expect(onSearchSubmit).toHaveBeenCalledTimes(1);
  });

  test("should call onSearchSubmit when enter key is pressed inside input",  () => {
    const onSearchSubmit = jest.fn();
    const onSearchChange = jest.fn()
    render(<Search onSearchSubmit={onSearchSubmit} onSearchChange={onSearchChange} search={""} />);
    const searchInput = screen.getByRole("textbox", {
        name: /search/i,
      });

    userEvent.type(searchInput, 'test search {enter}')

    expect(onSearchSubmit).toHaveBeenCalledTimes(1);
  });
});
