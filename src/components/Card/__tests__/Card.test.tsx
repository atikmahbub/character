import React from "react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import Card from "../CharacterCard";

const jsx = (
  <BrowserRouter>
    <Card
      id={1}
      name="Test"
      gender="Male"
      species="Human"
      handleTitleClick={() => {}}
      created="23-08-2021"
      image="Test Image"
    />
  </BrowserRouter>
);

test("Render Without Crashing", () => {
  const tree = renderer.create(jsx).toJSON();
  expect(tree).toMatchSnapshot();
});
