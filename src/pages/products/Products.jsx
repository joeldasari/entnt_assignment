import { Link } from "react-router-dom";
import { productsData } from "./data";
const Products = () => {
  return (
    <div className="products_container">
      <Link to={"/add_product"} className="product_btns link">
        Add a Product
      </Link>
      <div className="products_wrapper">
        {productsData && productsData.length > 0 ? (
          productsData.map((item) => (
            <div className="product" key={item.id}>
              <h4>{item.name}</h4>
              <span className="product_category">{item.category}</span>
              <div>
                <span>Price: </span>
                <strong>{item.price}/-</strong>
              </div>
              <div>
                <span>Stock Available: </span>
                <strong>{item.stock}</strong>
              </div>
              <div className="product_options">
                <Link
                  to={`/update_product/${item.id}`}
                  className="product_btns link"
                >
                  Update
                </Link>
                <Link
                  to={`/delete_product/${item.id}`}
                  className="product_btns link"
                >
                  Delete
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div>No products available!</div>
        )}
      </div>
    </div>
  );
};

export default Products;
