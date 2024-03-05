import React, { useState } from "react";

function Toggle() {
  const [isOn, setisOn] = useState(false);
  const handleClick = () => {
    setisOn((isOn) => !isOn);
  }
  const color = isOn ? "white" : "red";



  return <button style={{background: color}} onClick={handleClick}>{isOn ? "ON":"OFF"}</button>;
}

export default Toggle;
