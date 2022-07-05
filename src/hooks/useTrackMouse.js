import { useState } from "react";
import { useEffect } from "react";

export function useTrackMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    function update(e) {
      setX((x) => e.pageX);
      setY((y) => e.pageY);
    }

    window.addEventListener("mousemove", update);
    return () => window.removeEventListener(update);
  }, []);

  return [x, y];
}
