import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateStatus = () => {
  const [status, setStatus] = useState(null);
  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    alert("Updated Successfully");
    navigate("/orders");
  };
  return (
    <div className="add_product">
      <form className="add_product_form" onSubmit={handleUpdate}>
        <h3>Update Status</h3>
        <input
          type="text"
          placeholder="ex: Delivered"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateStatus;
