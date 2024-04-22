import React, { useState } from "react";

export default function Switch() {
  const [switchState, setSwitchState] = useState(false);
  const handleClickSwitch = () => {
    setSwitchState(!switchState);
    switchState
      ? (document.body.style.backgroundColor = "#000")
      : (document.body.style.backgroundColor = "#fff");
  };

  return (
    <div>
      <button onClick={handleClickSwitch}>Switch</button>
    </div>
  );
}
