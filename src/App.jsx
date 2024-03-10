import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Products from "./pages/products/Products";
import Orders from "./pages/orders/Orders";
import AddProduct from "./pages/AddProduct";
import UpdateProduct from "./pages/UpdateProduct";
import DeleteProduct from "./pages/Delete";
import UpdateStatus from "./pages/UpdateStatus";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path={"/products"} element={<Products />} />
          <Route path={"/orders"} element={<Orders />} />
          <Route path={"/add_product"} element={<AddProduct />} />
          <Route path={"/update_product/:id"} element={<UpdateProduct />} />
          <Route path={"/delete_product/:id"} element={<DeleteProduct />} />
          <Route path={"/update_status/:id"} element={<UpdateStatus />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
