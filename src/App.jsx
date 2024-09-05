import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Products from "./components/Products";
import Cart from "./pages/Cart";
import ProductCard from "./components/ProductCard";
import ProductDetails from "./components/ProductDetails";
import Contact from "../src/pages/Contact";
import About from "./pages/About";
import MainLayout from "./pages/MainLayout";
// import Navbar from "./pages/Navbar";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/productdetails/:productID?"
            element={<ProductDetails />}
          />
          <Route path="/productcard" element={<ProductCard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;

// ? this is the optional parameter wheather you give any parameter or not
