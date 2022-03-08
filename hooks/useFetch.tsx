import { useState, useEffect } from 'react';
import { SmartDevice } from '../mockedAPIdata/devices';

export const useFetch = (APIurl: string): SmartDevice[] | undefined => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(APIurl);
        const data = await response.json();
        if (response.status === 404) {
          throw new Error(data?.message);
        }
        setData(data);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error);
        }
      }
    };
    fetchData();
  }, [APIurl]);

  return data;
};
