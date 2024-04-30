import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ROUTES } from "./routes/routes";
import { Students, StudentDetail } from "./pages";
import Root from "./layouts/Root";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path={ROUTES.home.path} element={<Students />} />
      <Route path={ROUTES.studentDetail.path} element={<StudentDetail />} />
    </Route>
  )
);

function App() {
  return <div>
    <RouterProvider router={routes} />
  </div>;
}

export default App;
