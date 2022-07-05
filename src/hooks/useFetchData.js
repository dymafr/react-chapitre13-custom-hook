import { useEffect } from "react";
import { useState } from "react";

export function useFetchData(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const fetchedData = await response.json();
          setData(Array.isArray(fetchedData) ? fetchedData : [fetchedData]);
        } else {
          setError("Error");
        }
      } catch (e) {
        setError("Error");
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return {
    data,
    isLoading,
    error,
  };
}
