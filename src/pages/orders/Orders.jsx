import { Link } from "react-router-dom";
import { ordersData } from "./data";
const Orders = () => {
  return (
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
              <Link
                to={`/update_status/${item.orderId}`}
                className="order_btns link"
              >
                Update Status
              </Link>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Orders;
