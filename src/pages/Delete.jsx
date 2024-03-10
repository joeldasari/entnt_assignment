import { Link, useNavigate } from "react-router-dom";

const DeleteProduct = ({ id }) => {
  const navigate = useNavigate();
  const handleDelete = () => {
    alert("Deleted Successfully");
    navigate("/products");
  };
  return (
    <div className="delete_container">
      <div className="delete_msg">
        <h4>Are you sure you want to remove this item?</h4>
        <button className="delete_product" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteProduct;
