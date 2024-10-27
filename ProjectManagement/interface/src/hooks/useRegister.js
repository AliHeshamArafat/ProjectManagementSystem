import { useState } from "react";
import { fetchData } from "../services/api";

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const register = async (userData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetchData("register", "POST", userData);
      if (response.error) {
        throw new Error(response.error);
      }
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, error, success };
};

export default useRegister;
