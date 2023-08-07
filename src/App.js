import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wrapper from "./components/UI/Wrapper";
import Home, { HomeData } from "./components/Pages/Index/Home";
import About, { AboutData } from "./components/Pages/About/About";
import Blog from "./components/Pages/Blog/Blog";
import Sermon, { SermonData } from "./components/Pages/Gallery/Sermon";
import Contact from "./components/Pages/Contact/Contact";
import RootLayout, { GeneralData } from "./components/UI/Root";
// import sanityClient from "./client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    loader: GeneralData,
    children: [
      {
        index: true,
        element: <Home />,
        loader: HomeData,
      },
      { path: "/about", element: <About />, loader: AboutData },
      { path: "/sermon", element: <Sermon />, loader: SermonData },
      { path: "/contact", element: <Contact /> },
      { path: "/blog", element: <Blog /> },
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
