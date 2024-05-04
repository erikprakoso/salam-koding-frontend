import { useEffect, useState } from "react";

const useQuery = (fn) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [meta, setMeta] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isIdle, setIsIdle] = useState(true);
  const [error, setError] = useState(null);
  const [isFetched, setIsFetched] = useState(false);
  const [isRefetch, setIsRefetch] = useState(false);

  useEffect(() => {
    setIsIdle(true);
    if (isRefetch) {
      setIsFetched(false);
    }

    if (!isFetched) {
      if (fn) {
        setIsLoading(true);
        fn()
          .then((res) => {
            setData(res?.data);
            setMeta(res?.meta);
            setIsSuccess(true);
          })
          .catch((err) => {
            setIsError(true);
            setError(err);
          });
        setIsIdle(false);
        setIsLoading(false);
        setIsFetched(true);
        setIsRefetch(false);
      }
    }
  }, [fn, isFetched, isRefetch]);

  const refetch = () => {
    setIsRefetch(true);
  };

  return {
    isIdle,
    isLoading,
    isError,
    isSuccess,
    error,
    data,
    meta,
    refetch,
  };
};

export default useQuery;
