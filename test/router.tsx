import { BrowserRouter, RouterProvider } from "react-router-dom";
import { render } from "@testing-library/react";
import router from "../src/routes";

export function renderWithRouterContext(element: React.ReactElement) {
  render(<BrowserRouter>{element}</BrowserRouter>);
}

export function renderRoute(route = "/") {
  window.history.pushState({}, "Test Page", route);

  return render(<RouterProvider router={router} />);
}
