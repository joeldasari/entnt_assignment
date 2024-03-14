import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <Link to={"/"} className="link">
        <h2>ERP System</h2>
      </Link>
      <ul className="navigation">
        <Link to={"/"} className="link mobile">
          <li>Home</li>
        </Link>
        <Link to={"/products"} className="link">
          <li>Products</li>
        </Link>
        <Link to={"/orders"} className="link">
          <li>Orders</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
