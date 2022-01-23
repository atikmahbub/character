import React from "react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import App from "./App";

const jsx = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

test("Render Without Crashing Main App", () => {
  const tree = renderer.create(jsx).toJSON();
  expect(tree).toMatchSnapshot();
});
