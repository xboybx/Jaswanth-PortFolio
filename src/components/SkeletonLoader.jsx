import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="w-full h-full bg-[#2c2c2c] rounded-xl animate-pulse flex flex-col items-center justify-center gap-4 relative overflow-hidden">
      {/* Vertical bar like an ID card strap */}
      <div className="w-4 h-20 bg-[#4a4a4a] rounded-md shadow-glow"></div>

      {/* Larger square below the vertical bar */}
      <div className="w-20 h-20 bg-[#4a4a4a] rounded-md shadow-glow"></div>
    </div>
  );
};

export default SkeletonLoader;
