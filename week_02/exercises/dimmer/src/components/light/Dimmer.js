import React from "react";

export default function Dimmer({ dimPercentage, setDimPercentage}) {
    const  handleChangRange = (e) => {
        setDimPercentage(e.target.value);
    }
  return (
    <div className="dimmer">
      <input id="dimmer" type="range" min="0" max="100" step="1" value={dimPercentage} onChange={handleChangRange}/>
      <label htmlFor="dimmer">Dimmer</label>
    </div>
  );
}
