import React from "react";
import { shallow } from "enzyme";
import ListingsPage from "./listings-page";

describe("ListingsPage", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ListingsPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
