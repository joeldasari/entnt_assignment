import { ordersData } from "./orders/data";
import { productsData } from "./products/data";

const Dashboard = () => {
  return (
    <div className="dashboard_container">
      <div className="total_products">
        <h1>Dashboard</h1>
        <h2 style={{ textDecoration: "underline" }}>Products</h2>
        <span>Total Products: </span>
        <strong>{productsData.length}</strong>
      </div>
      <div className="products_container">
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
              </div>
            ))
          ) : (
            <div>No products available!</div>
          )}
        </div>
      </div>

      <div className="total_products">
        <h2 style={{ textDecoration: "underline" }}>Orders</h2>
        <span>Total Orders: </span>
        <strong>{ordersData.length}</strong>
      </div>
      <div className="orders_container">
        {ordersData && ordersData.length > 0 ? (
          <div className="orders_wrapper">
            {ordersData.map((item) => (
              <div className="order" key={item.orderId}>
                <div>
                  <span>Customer Name: </span>
                  <strong>{item.customerName}</strong>
                </div>
                <div>
                  <span>Booked On: </span>
                  <strong>{item.orderDate}</strong>
                </div>
                <div>
                  <span>Order ID: </span>
                  <strong>{item.orderId}</strong>
                </div>
                <div>
                  <span>Status: </span>
                  <strong>{item.status}</strong>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Dashboard;
