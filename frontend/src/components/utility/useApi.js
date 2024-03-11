// useApi.js
import { useState } from "react";
import axios from "axios";

const useApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (url, method = "get", body = null) => {
    try {
      setLoading(true);

      const config = { method, url };

      if (body) {
        config.data = body;
      }

      const response = await axios(config);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  // if (data.message === "EndPoint Is Not Found") {
  //   return console.log("second");
  // }
  //   console.log(data);

  const get = (url) => fetchData(url, "get");
  const post = (url, body) => fetchData(url, "post", body);
  const put = (url, body) => fetchData(url, "put", body);
  const del = (url) => fetchData(url, "delete");

  return { data, loading, error, get, post, put, del };
};

export default useApi;
