import React from "react";
import { config } from "react-transition-group";
import {
  render,
  RenderResult,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import {
  AutoComplete,
  AutoCompleteProps,
  DataSourceType,
} from "./autoComplete";

config.disabled = true;

const testArray = [
  { value: "ab", number: 11 },
  { value: "abc", number: 1 },
  { value: "b", number: 4 },
  { value: "c", number: 15 },
];

const testProps: AutoCompleteProps = {
  fetchSuggestions: (query) => {
    return testArray.filter((item) => item.value.includes(query));
  },
  onSelect: jest.fn(),
  placeholder: "auto-complete",
};

interface LakerPlayerProps {
  value: string;
  number: number;
}

const lakersWithNumber = [
  { value: "bradley", number: 11 },
  { value: "pope", number: 1 },
  { value: "caruso", number: 4 },
  { value: "cook", number: 2 },
  { value: "cousins", number: 15 },
  { value: "james", number: 23 },
  { value: "AD", number: 3 },
  { value: "green", number: 14 },
  { value: "howard", number: 39 },
  { value: "kuzma", number: 0 },
];

const renderOptionProps: AutoCompleteProps = {
  renderOption: (item: DataSourceType) => {
    const itemWithNumber = item as DataSourceType<LakerPlayerProps>;
    return (
      <>
        <b>名字: {itemWithNumber.value}</b>
        <span>球衣号码: {itemWithNumber.number}</span>
      </>
    );
  },
  fetchSuggestions: (query: string) => {
    return lakersWithNumber.filter((player) => player.value.includes(query));
  },
  onSelect: jest.fn(),
  placeholder: "render-option",
};

interface GithubUserProps {
  value: string;
  url: string;
}

const asyncProps: AutoCompleteProps = {
  renderOption: (item: DataSourceType) => {
    const itemWithGithub = item as DataSourceType<GithubUserProps>;
    return (
      <>
        <b>Name: {itemWithGithub.value}</b>
        <span>url: {itemWithGithub.url}</span>
      </>
    );
  },
  fetchSuggestions: (query: string) => {
    return fetch("https://api.github.com/search/users?q=" + query)
      .then((res) => res.json())
      .then(({ items }) => {
        return items
          .slice(0, 10)
          .map((item: any) => ({ value: item.login, ...item }));
      });
  },
  onSelect: jest.fn(),
  placeholder: "async",
};

let wrapper: RenderResult, inputNode: HTMLInputElement;
describe("test AutoComplete component", () => {
  beforeEach(() => {
    wrapper = render(<AutoComplete {...testProps} />);
    inputNode = wrapper.getByPlaceholderText(
      "auto-complete"
    ) as HTMLInputElement;
  });
  it("test basic AutoComplete behavior", async () => {
    // input change
    fireEvent.change(inputNode, { target: { value: "a" } });
    await waitFor(() => {
      expect(wrapper.queryByText("ab")).toBeInTheDocument();
    });
    // should have two suggestion items
    expect(
      wrapper.container.querySelectorAll(".suggestion-item").length
    ).toEqual(2);
    //click the first item
    fireEvent.click(wrapper.getByText("ab"));
    expect(testProps.onSelect).toHaveBeenCalledWith({
      value: "ab",
      number: 11,
    });
    expect(wrapper.queryByText("ab")).not.toBeInTheDocument();
    //fill the input
    expect(inputNode.value).toBe("ab");
  });
  it("should provide keyboard support", async () => {
    fireEvent.change(inputNode, { target: { value: "a" } });
    await waitFor(() => {
      expect(wrapper.queryByText("ab")).toBeInTheDocument();
    });
    const firstResult = wrapper.queryByText("ab");
    const secondResult = wrapper.queryByText("abc");

    fireEvent.keyDown(inputNode, { key: "ArrowDown" });
    expect(firstResult).toHaveClass("is-active");

    fireEvent.keyDown(inputNode, { key: "ArrowDown" });
    expect(secondResult).toHaveClass("is-active");

    fireEvent.keyDown(inputNode, { key: "ArrowUp" });
    expect(firstResult).toHaveClass("is-active");

    fireEvent.keyDown(inputNode, { key: "Enter" });
    expect(testProps.onSelect).toHaveBeenCalledWith({
      value: "ab",
      number: 11,
    });
    expect(wrapper.queryByText("ab")).not.toBeInTheDocument();
  });
  it("renderOption should generate the right template", async () => {
    const wrapper = render(<AutoComplete {...renderOptionProps} />);
    const inputNode = wrapper.getByPlaceholderText(
      "render-option"
    ) as HTMLInputElement;
    fireEvent.change(inputNode, { target: { value: "c" } });
    await waitFor(() => {
      expect(wrapper.queryByText("名字: caruso")).toBeInTheDocument();
      expect(wrapper.queryByText("球衣号码: 4")).toBeInTheDocument();
    });
    expect(
      wrapper.container.querySelectorAll(".suggestion-item").length
    ).toEqual(3);
    fireEvent.click(wrapper.getByText("名字: caruso"));
    expect(renderOptionProps.onSelect).toHaveBeenCalledWith({
      value: "caruso",
      number: 4,
    });
    expect(wrapper.queryByText("名字: caruso")).not.toBeInTheDocument();
    expect(wrapper.queryByText("球衣号码: 4")).not.toBeInTheDocument();
    expect(inputNode.value).toBe("caruso");
  });

  // it("async fetchSuggestions should works fine", async () => {
  //    const wrapper = render(<AutoComplete {...asyncProps} />);
  //    const inputNode = wrapper.getByPlaceholderText(
  //      "async"
  //    ) as HTMLInputElement;
  //    fireEvent.change(inputNode, { target: { value: "CoderDgx" } });
  //    await waitFor(() => {
  //      expect(wrapper.queryByText("Name: CoderDgx")).toBeInTheDocument();
  //      expect(
  //        wrapper.queryByText("url: https://api.github.com/users/CoderDgx")
  //      ).toBeInTheDocument();
  //    });
  //    expect(
  //      wrapper.container.querySelectorAll(".suggestion-item").length
  //    ).toEqual(1);
  // });
});
