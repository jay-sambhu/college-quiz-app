import { useState, useCallback } from 'react';
import { toast } from 'react-toastify';

const useApi = (apiFunction) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const execute = useCallback(
    async (...args) => {
      try {
        setLoading(true);
        setError(null);
        const response = await apiFunction(...args);
        setData(response);
        return response;
      } catch (err) {
        setError(err);
        toast.error(err.message || 'An error occurred');
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [apiFunction]
  );

  return {
    execute,
    loading,
    error,
    data,
  };
};

export default useApi; 