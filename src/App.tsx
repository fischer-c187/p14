import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "@layouts/Root/root";
import Home from "@pages/home/home";
import Employee from "@pages/employee/employee";
import PageNotFound from "@pages/PageNotFound/PageNotFound";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route path='employee' element={<Employee />} />
        <Route path='*' element={<PageNotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
