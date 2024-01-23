import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import routes from "../src/routes";

const queryClient = new QueryClient();

export function renderWithRouterContext(element: React.ReactElement) {
  render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>{element}</BrowserRouter>
    </QueryClientProvider>
  );
}

export function renderRoute(route = "/") {
  window.history.pushState({}, "Test Page", route);

  return render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={createBrowserRouter(routes)} />
    </QueryClientProvider>
  );
}
