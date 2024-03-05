import React, { useState } from "react";

function Toggle() {
  const [isOn, setisOn] = useState(false);
  const handleClick = () => {
    setisOn((isOn) => !isOn);
  }



  return <button onClick={handleClick}>{isOn ? "ON":"OFF"}</button>;
}

export default Toggle;
