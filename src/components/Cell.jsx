import { useEffect, useState, useRef } from "react";
const Cell = ({
  color = "",
  setPosx,
  setPosy,
  setColorSelectorVisible,
  isDrawing,
  setIsDrawing,
}) => {
  const [active, setActive] = useState(false);
  const btnRef = useRef(null);
  const handleClick = () => {
    setActive(true);
  };
  const handleMouseEnter = () => {
    if (isDrawing) {
      setActive(true);
    }
  };
  const handleMouseDown = () => {
    setActive(true);
    setIsDrawing(true);
  };
  const handleMouseUp = (e) => {
    if (e.button === 2) {
      e.preventDefault();
      console.log(e);
      setPosx(e.pageX);
      setPosy(e.pageY);
      setColorSelectorVisible(true);
    }
  };

  useEffect(() => {
    btnRef.current.addEventListener("contextmenu", (e) => handleMouseUp(e));
    return btnRef.current.removeEventListener("contextmenu", (e) =>
      handleMouseUp(e)
    );
  }, []);

  return (
    <button
      ref={btnRef}
      style={{ backgroundColor: active ? color : "white" }}
      onClick={handleClick}
      className="cell"
      onMouseDown={handleMouseDown}
      onMouseEnter={handleMouseEnter}
    ></button>
  );
};

export default Cell;
