import React from "react";

export function useGetData(url) {
  const [data, setData] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Ooops!! We get error:", response.status);
          }
          return response.json();
        })
        .then((text) => {
          setData(text.message);
          setError(null);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchData();

    return () => setData("");
  }, []);

  return { data, loading, error };
}
