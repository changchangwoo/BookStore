import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";
import Order from "./pages/Order";
import Search from "./pages/Search";
import './index.css';
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
    <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/order" element={<Order />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
