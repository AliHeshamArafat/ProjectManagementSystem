import { useEffect, useState } from "react";
import { fetchData } from "../services/api";

const useFetch = (endpoint, method = "GET", body = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const result = await fetchData(endpoint, method, body);
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromApi();
  }, [endpoint, method, body]);

  return { data, error, loading };
};

export default useFetch;
