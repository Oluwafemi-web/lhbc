import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wrapper from "./components/UI/Wrapper";
import "./css/style.css";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import Home from "./components/Pages/Index/Home";
const router = createBrowserRouter([{ path: "/", element: <Home /> }]);

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
