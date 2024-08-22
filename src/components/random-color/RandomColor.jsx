import { useEffect, useState } from "react";

export default function RandomColor() {
  const [colorType, setColorType] = useState("hex");
  const [color, setcolor] = useState("#000000");

  function rand(length) {
    return Math.floor(Math.random() * length);
  }

  function handleHexColor() {
    const arr = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += arr[rand(arr.length)];
    }
    setcolor(hexColor);
  }

  function handleRGBColor() {
    const r = rand(256);
    const g = rand(256);
    const b = rand(256);

    setcolor(`rgb(${r},${g},${b})`);
  }

  // useEffect(() => {
  //   colorType === "rgb" ? handleRGBColor : handleHexColor;
  // }, [colorType]);

  return (
    <div style={{ width: "100vw", height: "100vh", background: color }}>
      <button
        onClick={() => {
          setColorType("hex");
          handleHexColor();
        }}
      >
        Generate Random Hex
      </button>
      <button
        onClick={() => {
          setColorType("rgb");
          handleRGBColor();
        }}
      >
        Generate Random RGB
      </button>
      <button onClick={colorType === "hex" ? handleHexColor : handleRGBColor}>
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          gap: "20px",
        }}
      >
        <h3>{colorType === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
