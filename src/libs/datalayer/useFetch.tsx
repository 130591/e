import { useState } from "react";
import axios from "axios";

const useFetch = async (url: string, method: string, options = {}) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const repeat_action: number = 3;

  try {
    for (let i = 0; i < repeat_action; i++) {
      const resp = await axios[method || "get"](url, options);

      setResponse(resp);
      break;
    }
  } catch (err) {
    setError(err);
  }

  return [response, error];
};

export default useFetch;
