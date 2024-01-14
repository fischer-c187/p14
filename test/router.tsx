import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { render } from "@testing-library/react";

import routes from "../src/routes";

export function renderWithRouterContext(element: React.ReactElement) {
  render(<BrowserRouter>{element}</BrowserRouter>);
}

export function renderRoute(route = "/") {
  window.history.pushState({}, "Test Page", route);

  return render(<RouterProvider router={createBrowserRouter(routes)} />);
}
