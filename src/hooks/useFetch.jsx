import { useEffect, useState } from "react";

export default function useFetch(url, refresh) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("admin_token")}`,
          },
        });

        if (!res.ok) {
          throw new Error(`Request failed (${res.status})`);
        }

        const result = await res.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, refresh]);

  return { data, loading, error };
}
