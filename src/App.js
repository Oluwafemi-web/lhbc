import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wrapper from "./components/UI/Wrapper";
import "./css/style.css";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import Home from "./components/Pages/Index/Home";
import About from "./components/Pages/About/About";
import Blog from "./components/Pages/Blog/Blog";
import Gallery from "./components/Pages/Gallery/Gallery";
import Contact from "./components/Pages/Contact/Contact";
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/contact", element: <Contact /> },
  { path: "/blog", element: <Blog /> },
]);

function App() {
  return (
    <Wrapper>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </Wrapper>
  );
}

export default App;
