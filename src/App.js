import "./Assets/Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import ErrorPage404 from "./Pages/404errorPage/ErrorPage";
import Home from "./Pages/Home/Home";
import ProductPage from "./Pages/ProductPage/ProductPage";
import LoadingPage from "./Pages/LoadingPage/LoadingPage";
import CartPage from "./Pages/CartPage/CartPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<ErrorPage404 />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product-page" element={<ProductPage />}></Route>
        <Route path="/loading" element={<LoadingPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
