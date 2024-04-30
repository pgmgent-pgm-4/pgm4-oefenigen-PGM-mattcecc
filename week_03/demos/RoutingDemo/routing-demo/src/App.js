import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home, Contact, About, NotFound, Blog, BlogPost } from "./pages";
import Root from "./layouts/Root";
import { ROUTES } from "./routes/routes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
    <Route path={ROUTES.Home.path} element={<Home />} />,
    <Route path={ROUTES.Contact.path} element={<Contact />} />,
    <Route path={ROUTES.About.path} element={<About />} />
    <Route path={ROUTES.Blog.path} element={<Blog />} />
    <Route path={ROUTES.BlogPost.path} element={<BlogPost />} />
    <Route path="*" element={<NotFound />} />
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
