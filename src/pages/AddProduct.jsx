import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const [productName, setProductName] = useState(null);
  const [productType, setProductType] = useState(null);
  const [productPrice, setProductPrice] = useState(null);
  const [productStock, setProductStock] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Item added Successfully");
    navigate("/products");
  };
  return (
    <div className="add_product">
      <form className="add_product_form" onSubmit={handleSubmit}>
        <h3>Add Product</h3>
        <input
          type="text"
          placeholder="Product name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Product type"
          value={productType}
          onChange={(e) => setProductType(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Product price (₹)"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          required
          min={1}
        />
        <input
          type="number"
          placeholder="Stock available"
          value={productStock}
          onChange={(e) => setProductStock(e.target.value)}
          required
          min={1}
        />
        <button type="submit">Submit</button>
        <p className="add_product_note">Note: Please enter all the fields</p>
      </form>
    </div>
  );
};

export default AddProduct;
