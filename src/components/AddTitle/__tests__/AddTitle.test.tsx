import React from "react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import AddTitle from "../AddTitle";

const jsx = (
  <BrowserRouter>
    <AddTitle title="Hello" />
  </BrowserRouter>
);

test("Render Without BackButton", () => {
  const tree = renderer.create(jsx).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Render With BackButton", () => {
  const tree = renderer.create(jsx).toJSON();
  expect(tree).toMatchSnapshot();
});
