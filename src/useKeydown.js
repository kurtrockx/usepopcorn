import { useEffect } from "react";

export function useKeydown(key, callback) {
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.code === key) {
        callback();
      }
    };

    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [callback, key]);
}
