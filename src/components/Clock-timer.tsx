"use client";

import { useEffect, useState } from "react";

export default function ClockTimer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className=" rounded  text-sm ">
      Casablanca, Maroc  {time.toLocaleTimeString("fr-FR")}
    </div>
  );
}
