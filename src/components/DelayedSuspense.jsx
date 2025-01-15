import React, { useState, useEffect } from "react";

const DelayedSuspense = ({ children, fallback, delay = 0 }) => {
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFallback(true);
    }, delay);

    return () => clearTimeout(timer); // Cleanup the timer
  }, [delay]);

  return showFallback ? fallback : null;
};

export default DelayedSuspense;
