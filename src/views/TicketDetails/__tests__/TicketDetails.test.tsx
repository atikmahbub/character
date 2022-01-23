import React from "react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import TicketDetails from "../TicketDetails";
import * as ReactDOM from "react-dom";

const jsx = (
  <BrowserRouter>
    <TicketDetails />
  </BrowserRouter>
);

test("Render Without Crashing", () => {
  const tree = renderer.create(jsx).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("Ticket Details Tests", () => {
  let container: HTMLDivElement;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    // eslint-disable-next-line testing-library/no-render-in-setup
    ReactDOM.render(
      <BrowserRouter>
        <TicketDetails />
      </BrowserRouter>,
      container
    );
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Renders correctly initial document", () => {
    const title = container.querySelectorAll("h3");
    expect(title).toHaveLength(1);
    expect(title[0]).toHaveTextContent("Character Details");
  });

  it("Image Test", () => {
    const image = container.querySelectorAll("img");
    expect(image).toBeTruthy();
  });
});
