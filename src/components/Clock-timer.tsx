"use client";

import { useEffect, useState } from "react";

export default function ClockTimer() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    // Initialiser la date uniquement côté client
    setTime(new Date());

    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!time) return null; // Rien rendu côté serveur

  return (
    <div className="rounded text-sm">
      Casablanca, Maroc {time.toLocaleTimeString("fr-FR")}
    </div>
  );
}
