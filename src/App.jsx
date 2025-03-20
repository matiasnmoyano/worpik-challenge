import { useState, useMemo, useEffect } from "react";
import "./App.css";
import Cell from "./components/Cell";
import ColorSelector from "./components/ColorSelector";

function App() {
  const [activeColor, setActiveColor] = useState("red");
  const [posx, setPosx] = useState(50);
  const [posy, setPosy] = useState(50);
  const [colorSelectorVisible, setColorSelectorVisible] = useState(false);
  const [gridSize, setGridSize] = useState({ cols: 100, rows: 1 });
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const updateGridSize = () => {
      const cellSize = window.innerWidth / 100;
      const rows = Math.ceil(window.innerHeight / cellSize);
      setGridSize({ cols: 100, rows });
    };

    updateGridSize();

    window.addEventListener("resize", updateGridSize);
    return () => window.removeEventListener("resize", updateGridSize);
  }, []);

  useEffect(() => {
    const handleMouseUp = () => setIsDrawing(false);
    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, []);

  const cells = useMemo(
    () =>
      Array.from({ length: gridSize.cols * gridSize.rows }, (_, i) => (
        <Cell
          key={i}
          color={activeColor}
          setPosx={setPosx}
          setPosy={setPosy}
          setColorSelectorVisible={setColorSelectorVisible}
          isDrawing={isDrawing}
          setIsDrawing={setIsDrawing}
        />
      )),
    [gridSize, activeColor, isDrawing]
  );
  return (
    <>
      <div className="container">{cells}</div>
      {colorSelectorVisible && (
        <ColorSelector
          setColorSelectorVisible={setColorSelectorVisible}
          posx={posx}
          posy={posy}
          setActiveColor={setActiveColor}
        />
      )}
    </>
  );
}

export default App;
