import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Our Application</h1>
      <p>Please log in or register to continue.</p>
      <div>
        <Link
          to="/login"
          className="btn btn-primary"
          style={{ marginRight: "10px" }}
        >
          Login
        </Link>
        <Link to="/register" className="btn btn-secondary">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;
