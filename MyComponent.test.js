import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { MyComponent } from "./MyComponent";

test("Select performs a React state update on unmounted component", () => {
  const { unmount } = render(<MyComponent />);
  try {
    fireEvent.mouseDown(
      document.getElementsByClassName("ant-select-selector").item(0)
    );
  } finally {
    unmount();
  }
});
