import { useEffect, useState } from "react";
import "./style.css";
function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#ffffff");

  const generationMethod = (length) => {
    return Math.floor(Math.random() * length);
  };
  const handleHex = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[generationMethod(hex.length)];
    }
    setColor(hexColor);
  };
  const handleRGB = () => {
    const r = generationMethod(256);
    const g = generationMethod(256);
    const b = generationMethod(256);
    setColor(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    if (typeOfColor === "rgb") handleRGB();
    else handleHex();
  }, [typeOfColor]);

  return (
    <>
      <div className="rc-title">Random Color Generator</div>
      <div className="rc-container" style={{ background: color }}>
        <div className="rc-btn-container">
          <button onClick={() => setTypeOfColor("hex")}>Set HEX</button>
          <button onClick={() => setTypeOfColor("rgb")}>Set RGB</button>
          <button onClick={typeOfColor === "hex" ? handleHex : handleRGB}>
            Generate Random {typeOfColor.toUpperCase()} Color
          </button>
        </div>
        <div className="rc-details">
          <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
          <h1>{color}</h1>
        </div>
      </div>
    </>
  );
}

export default RandomColor;
