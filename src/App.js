import Wrapper from "./components/UI/Wrapper";
import "./css/style.css";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import Home from "./components/Pages/Index/Home";

function App() {
  return (
    <Wrapper>
      <Header />
      <Home />
      <Footer />
    </Wrapper>
  );
}

export default App;
