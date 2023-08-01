import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/Home/About";
import Contact from "./Components/Home/Contact";
import Pagenotfound from "./Components/Home/Pagenotfound";
import Policy from "./Components/Home/Policy";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignIn/SignUp";
import Cart from "./Components/Product2/Cart";
import Product from "./Components/Product2/Product";
import { Toaster } from "react-hot-toast";
import AddProduct from "./Components/Product2/AddProduct";
import ShowProduct from "./Components/Product2/ShowProduct";
import Order from "./Components/Product2/Order";
import Category from "./Components/Product2/Category";
import { Provider } from "react-redux";
import store from "./store";
import SelectedSearchProduct from "./Components/Product2/SelectedSearchProduct";

function App() {
  return (
    <>
      <Provider store={store}>
        <Toaster />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="/policy" Component={Policy} />
          <Route path="/cart" Component={Cart} />
          <Route path="/products" Component={Product} />
          <Route path="/add" Component={AddProduct} />          
          <Route path="/search" Component={SelectedSearchProduct} />
          <Route path="/show/:id" Component={ShowProduct} />
          <Route path="/login" Component={SignIn} />
          <Route path="/register" Component={SignUp} />
          <Route path="*" Component={Pagenotfound} />
          <Route adminOnly={false} path="/order/:id/:quantity" element={<Order />} />
        
        </Routes>
      </Provider>

      {/* <Copyright/> */}
    </>
  );
}

export default App;
