import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Alert from "./alert";

const defaultProps = {
  title: "this is alert!",
};

describe("test Alert component", () => {
  it("should render the correct default alert", () => {
    const wrapper = render(<Alert {...defaultProps}/>)
  });
})