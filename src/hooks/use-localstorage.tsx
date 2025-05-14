import { useEffect, useState } from "react";

const useLocalStorage = (key: string) => {
  const [item, setItem] = useState<string | null>("");
  useEffect(() => {
    const localValue = localStorage.getItem(key);
    setItem(localValue);
  }, [key]);
  return item;
};

export default useLocalStorage;
