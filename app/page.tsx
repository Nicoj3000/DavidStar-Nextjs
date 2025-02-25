import React from "react";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <svg width="300" height="300" viewBox="0 0 200 200">
        {/* Triángulo superior */}
        <polygon
          points="100,20 180,150 20,150"
          fill="none"
          stroke="black"
          strokeWidth="8"
        />
        {/* Triángulo inferior (invertido) */}
        <polygon
          points="100,180 20,50 180,50"
          fill="none"
          stroke="black"
          strokeWidth="8"
        />
      </svg>
    </div>
  );
}
