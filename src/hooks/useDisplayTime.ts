import { useEffect, useState } from "react";

export function useDisplayTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  });

  const formatTime = time.toLocaleTimeString();

  return formatTime;
}
