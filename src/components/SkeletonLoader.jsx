import React, { useEffect, useState } from "react";

const SkeletonLoader = ({ isLoading = true, onExplosionComplete }) => {
  const [explode, setExplode] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      // Trigger explosion animation
      setExplode(true);
      // Keep loader visible during explosion animation (1s)
      const timer = setTimeout(() => {
        setExplode(false);
        setVisible(false);
        if (onExplosionComplete) onExplosionComplete();
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // When loading starts again, show loader
      setVisible(true);
      setExplode(false);
    }
  }, [isLoading, onExplosionComplete]);

  if (!visible) return null;

  return <div className={`loader ${explode ? "explode" : ""} `}></div>;
};

export default SkeletonLoader;
