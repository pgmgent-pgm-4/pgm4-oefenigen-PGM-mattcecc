import "./App.css";
import { ROUTES } from "./routes/Routes";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./layouts/Root";
import { Home, About, Projects, Contact, Resume } from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path={ROUTES.Home.path} element={<Home />} />
      <Route path={ROUTES.About.path} element={<About />} />
      <Route path={ROUTES.Contact.path} element={<Contact />} />
      <Route path={ROUTES.Projects.path} element={<Projects />} />
      <Route path={ROUTES.Resume.path} element={<Resume />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
