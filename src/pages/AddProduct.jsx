import { useState } from "react";

const AddProduct = () => {
  const [productName, setProductName] = useState(null);
  const [productType, setProductType] = useState(null);
  const [productPrice, setProductPrice] = useState(null);
  const [productStock, setProductStock] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = { productName, productType, productPrice, productStock };
    alert(JSON.stringify(result));
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
