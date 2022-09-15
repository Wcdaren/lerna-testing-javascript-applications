import React from "react";
import { App } from "./App.jsx";
import { render } from "react-dom";
import { act } from "react-dom/test-utils";
// import { screen, fireEvent } from "@testing-library/dom";

//  create a div element
const root = document.createElement("div");
//  Attaches the div to the document's body
document.body.appendChild(root);
test("renders the appropriate header", () => {
  act(() => {
    // Renders an instance of App to the div you’ve attached to the document’s body
    render(<App />, root);
  });
});

test("renders the appropriate header", () => {
  act(() => {
    // Renders an instance of App to the div you’ve attached to the document’s body
    render(<App />, root);
  });

  // Finds an h1 element within the document
  const header = document.querySelector("h1");
  // Asserts that the header’s contents are “Inventory Contents”
  expect(header.textContent).toBe("Inventory Contents");
});
test("renders the appropriate header", () => {
  act(() => {
    // Renders an instance of App to the div you’ve attached to the document’s body
    render(<App />, root);
  });
  // Uses the getByText function from @testing-library/dom to find an element
  // whose contents are “Inventory Contents,” and then asserts that the element was found
  expect(screen.getByText("Inventory Contents")).toBeInTheDocument();
});

test("increments the number of cheesecakes", () => {
  act(() => {
    // Renders an instance of App
    render(<App />, root);
  });

  // Uses the getByText method from @testing-library/dom to find an element indicating that the inventory contains zero cheesecakes, and then asserts that it exists
  expect(screen.getByText("Cheesecakes: 0")).toBeInTheDocument();

  // Finds the button to add cheesecakes by its text
  const addCheesecakeBtn = screen.getByText("Add cheesecake");

  act(() => {
    // Uses fireEvent from @testing-library/dom to click the button that adds a cheesecake to the inventory, and makes sure that updates are processed and applied to the DOM
    fireEvent.click(addCheesecakeBtn);
  });

  // Uses getByText to find an element indicating that the inventory contains one cheesecake, and then asserts that it exists
  expect(screen.getByText("Cheesecakes: 1")).toBeInTheDocument();
});
