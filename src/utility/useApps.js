import { useState, useEffect } from "react";
import axios from "axios";

const useApps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("/data.json")
      .then((res) => setApps(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { apps, loading, error };
};

export default useApps;
