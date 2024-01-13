import Root from "@layouts/Root/root";
import PageNotFound from "@pages/PageNotFound/PageNotFound";
import Employee from "@pages/employee/employee";
import Home from "@pages/home/home";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<Home />} />
      <Route path='employee' element={<Employee />} />
      <Route path='*' element={<PageNotFound />} />
    </Route>
  )
);

export default router;
