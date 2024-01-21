import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import Dropdown from "./Dropdown";

const testOptions = [
  { value: "Test", label: "test" },
  { value: "Test2", label: "test2" },
];

describe("Dropdown", () => {
  it("should render without error", () => {
    render(
      <Dropdown
        optionPreSelected={testOptions[0]}
        name='test'
        options={testOptions}
      />
    );
    expect(screen.queryByTestId("dropdownWrapper")).toBeInTheDocument();
  });

  it("should render with options", async () => {
    const user = userEvent.setup();
    render(
      <Dropdown
        optionPreSelected={testOptions[0]}
        name='test'
        options={testOptions}
      />
    );
    await user.click(screen.getByTestId("dropdownBtn"));
    expect(screen.getAllByRole("option")).toHaveLength(2);
  });

  it("should render with optionPreSelected", () => {
    render(
      <Dropdown
        optionPreSelected={testOptions[0]}
        name='test'
        options={testOptions}
      />
    );
    expect(screen.getByText("test")).toHaveTextContent("test");
  });

  it('should open/close list of options when click on "dropdownBtn"', async () => {
    const user = userEvent.setup();
    render(
      <Dropdown
        optionPreSelected={testOptions[0]}
        name='test'
        options={testOptions}
      />
    );
    expect(screen.queryAllByRole("option")).toHaveLength(0);

    await user.click(screen.getByTestId("dropdownBtn"));
    expect(screen.getAllByRole("option")).toHaveLength(2);
    await user.click(screen.getByTestId("dropdownBtn"));
    expect(screen.queryAllByRole("option")).toHaveLength(0);
  });

  it('should open/close list of options when press "Enter" on "dropdownBtn"', async () => {
    const user = userEvent.setup();
    render(
      <Dropdown
        optionPreSelected={testOptions[0]}
        name='test'
        options={testOptions}
      />
    );

    const dropdownBtn = screen.getByTestId("dropdownBtn");
    expect(screen.queryAllByRole("option")).toHaveLength(0);
    dropdownBtn.focus();
    await user.keyboard("{Enter}");
    expect(screen.getAllByRole("option")).toHaveLength(2);
    dropdownBtn.focus();
    await user.keyboard("{Enter}");

    expect(screen.queryAllByRole("option")).toHaveLength(0);
  });

  it('should close list of options when press "Escape"', async () => {
    const user = userEvent.setup();
    render(
      <Dropdown
        optionPreSelected={testOptions[0]}
        name='test'
        options={testOptions}
      />
    );

    const dropdownBtn = screen.getByTestId("dropdownBtn");
    expect(screen.queryAllByRole("option")).toHaveLength(0);
    dropdownBtn.focus();
    await user.keyboard("{Enter}");
    expect(screen.getAllByRole("option")).toHaveLength(2);
    dropdownBtn.focus();
    await user.keyboard("{Escape}");

    expect(screen.queryAllByRole("option")).toHaveLength(0);
  });

  it("should close list of options when click outside", async () => {
    const user = userEvent.setup();
    render(
      <Dropdown
        optionPreSelected={testOptions[0]}
        name='test'
        options={testOptions}
      />
    );

    const dropdownBtn = screen.getByTestId("dropdownBtn");
    expect(screen.queryAllByRole("option")).toHaveLength(0);
    await user.click(dropdownBtn);
    expect(screen.getAllByRole("option")).toHaveLength(2);
    await user.click(document.body);

    expect(screen.queryAllByRole("option")).toHaveLength(0);
  });

  it("should select option when press Enter on it", async () => {
    const user = userEvent.setup();
    render(
      <Dropdown
        optionPreSelected={testOptions[0]}
        name='test'
        options={testOptions}
      />
    );
    expect(screen.getByTestId("dropdownBtn")).toHaveTextContent("test");
    await user.click(screen.getByTestId("dropdownBtn"));
    screen.getAllByRole("option")[1].focus();
    await user.keyboard("{Enter}");
    expect(screen.getByTestId("dropdownBtn")).toHaveTextContent("test2");
  });

  it("should select option when click on it", async () => {
    const user = userEvent.setup();
    render(
      <Dropdown
        optionPreSelected={testOptions[0]}
        name='test'
        options={testOptions}
      />
    );
    expect(screen.getByTestId("dropdownBtn")).toHaveTextContent("test");
    await user.click(screen.getByTestId("dropdownBtn"));
    await user.click(screen.getByText("test2"));
    expect(screen.getByTestId("dropdownBtn")).toHaveTextContent("test2");
  });

  it("should call onChange when select option", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Dropdown
        optionPreSelected={testOptions[0]}
        name='test'
        options={testOptions}
        onChange={onChange}
      />
    );
    expect(screen.getByTestId("dropdownBtn")).toHaveTextContent("test");
    await user.click(screen.getByTestId("dropdownBtn"));
    await user.click(screen.getByText("test2"));
    expect(onChange).toHaveBeenCalled();
  });

  it("should open list of options when input have focus", async () => {
    const user = userEvent.setup();
    render(
      <>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor='test'>test</label>
        <Dropdown
          optionPreSelected={testOptions[0]}
          name='test'
          options={testOptions}
        />
      </>
    );
    await user.click(screen.getByLabelText("test"));
    expect(screen.getAllByRole("option")).toHaveLength(2);
  });

  it('should rotate icon when click on "dropdownBtn"', async () => {
    const user = userEvent.setup();
    render(
      <Dropdown
        optionPreSelected={testOptions[0]}
        name='test'
        options={testOptions}
      />
    );

    const icon = screen.getByAltText("icon");
    expect(icon).not.toHaveClass("rotate-180");
    await user.click(screen.getByTestId("dropdownBtn"));
    expect(icon).toHaveClass("rotate-180");
    await user.click(screen.getByTestId("dropdownBtn"));
    expect(icon).not.toHaveClass("rotate-180");
  });
});
