import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
import Wrapper from "./components/UI/Wrapper";

import RootLayout, { GeneralData } from "./components/UI/Root";
import ErrorPage from "./components/Pages/Error";
// import sanityClient from "./client";

const Home = lazy(() => import("./components/Pages/Index/Home"));
const About = lazy(() => import("./components/Pages/About/About"));
const Sermon = lazy(() => import("./components/Pages/Gallery/Sermon"));
const Contact = lazy(() => import("./components/Pages/Contact/Contact"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    loader: GeneralData,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () =>
          import("./components/Pages/Index/Home").then((module) =>
            module.HomeData()
          ),
      },
      {
        path: "/about",
        element: <About />,
        loader: () =>
          import("./components/Pages/About/About").then((module) =>
            module.AboutData()
          ),
      },
      {
        path: "/sermon",
        element: <Sermon />,
        loader: () =>
          import("./components/Pages/Gallery/Sermon").then((module) =>
            module.SermonData()
          ),
      },
      {
        path: "/contact",
        element: <Contact />,
        loader: () =>
          import("./components/Pages/Contact/Contact").then((module) =>
            module.ContactData()
          ),
      },
      // { path: "/blog", element: <Blog /> },
    ],
  },
]);

function App() {
  return (
    <Wrapper>
      <RouterProvider router={router} />
    </Wrapper>
  );
}

export default App;
