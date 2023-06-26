import { useEffect } from "react";

export default function useClickOutside(ref, callback) {
  useEffect(() => {
    const handleClick = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      callback();
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  });
}
