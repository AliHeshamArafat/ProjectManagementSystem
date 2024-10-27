import { useState } from "react";
import { fetchData } from "../services/api";

const useLogin = () => {
  const [error, setError] = useState("");

  const login = async (username, password) => {
    try {
      const response = await fetchData("auth/login", "POST", {
        username,
        password,
      });
      if (response.token) {
        localStorage.setItem("token", response.token);
        window.location.href = "/dashboard";
      }
    } catch (error) {
      setError("Login failed. Check your credentials.");
    }
  };

  return { login, error };
};

export default useLogin;
