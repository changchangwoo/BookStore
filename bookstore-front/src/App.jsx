import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";
import Order from "./pages/Order";
import Search from "./pages/Search";
import './index.css';
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import ModalController from "./components/Modal/ModalController";
import Delivery from "./pages/Delivery";

function App() {
  return (
    <>
    <ModalController />
    <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail/:category_id/:id" element={<Detail />} />
        <Route path="/order" element={<Order />} />
        <Route path="/search" element={<Search />} />
        <Route path="/delivery" element={<Delivery />} />
      </Routes>
    </>
  );
}

export default App;
