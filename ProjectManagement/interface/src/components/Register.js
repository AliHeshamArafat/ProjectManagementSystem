import React, { useState } from "react";
import useRegister from "../hooks/useRegister";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, loading, error, success } = useRegister();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { username, email, password };
    await register(userData);

    if (success) {
      navigate("/login"); // Redirect to login page on successful registration
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && (
          <p style={{ color: "green" }}>
            Registration successful! Redirecting...
          </p>
        )}
      </form>
    </div>
  );
};

export default Register;
