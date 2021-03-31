import React from "react";
import { shallow } from "enzyme";
import ListingPage from "./listing-page";

describe("ListingPage", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ListingPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
