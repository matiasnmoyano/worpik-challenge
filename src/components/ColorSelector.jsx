const ColorSelector = ({
  setActiveColor,
  posx,
  posy,
  setColorSelectorVisible,
}) => {
  const colors = ["red", "yellow", "green", "blue", "pink"];
  const handleSelectColor = (color) => {
    setActiveColor(color);
    setColorSelectorVisible(false);
  };
  return (
    <div
      className="selector-container"
      style={{ top: `${posy}px`, left: `${posx}px` }}
      onMouseLeave={() => setColorSelectorVisible(false)}
    >
      {colors.map((color, key) => {
        return (
          <button
            onContextMenu={(e) => e.preventDefault()}
            onClick={() => handleSelectColor(color)}
            id={key}
            style={{
              backgroundColor: color,
            }}
            className="selector-button"
          ></button>
        );
      })}
    </div>
  );
};

export default ColorSelector;
