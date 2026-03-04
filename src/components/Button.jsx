import React, { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={handleClick}>
        Click Me
      </button>

      <p>Button clicked {count} times</p>
    </div>
  );
};

export default Button;
