import React from "react";
import { shallow } from "enzyme";
import HomePage from "./homePage";

describe("HomePage", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper).toMatchSnapshot();
  });
});
