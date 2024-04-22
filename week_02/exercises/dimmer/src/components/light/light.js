import React from "react";
import "./light.css";

export default function Light({ dimPercentage }) {
  return (
    <div
      className="light"
      style={{ backgroundColor: `hsla(48, 89%, 50%, ${dimPercentage / 100})` }}>
      </div>
  );
}
