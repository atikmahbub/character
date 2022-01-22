import React from "react";
import renderer from "react-test-renderer";
import TicketDetails from "../TicketDetails";

it("should render an empty message when no books", () => {
  const elem = renderer.create(<TicketDetails />).toJSON();
  expect(elem).toMatchSnapshot();
});
