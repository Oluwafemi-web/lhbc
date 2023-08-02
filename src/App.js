import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wrapper from "./components/UI/Wrapper";
import Home, { HomeData } from "./components/Pages/Index/Home";
import About from "./components/Pages/About/About";
import Blog from "./components/Pages/Blog/Blog";
import Gallery from "./components/Pages/Gallery/Gallery";
import Contact from "./components/Pages/Contact/Contact";
import RootLayout, { GeneralData } from "./components/UI/Root";
// import sanityClient from "./client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: GeneralData,
    children: [
      {
        index: true,
        element: <Home />,
        loader: HomeData,
      },
      { path: "/about", element: <About /> },
      { path: "/gallery", element: <Gallery /> },
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
