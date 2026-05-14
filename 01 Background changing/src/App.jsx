import React, { useState } from "react";

const App = () => {
  const colorName = [
    {
      Name: "red",
    },
    {
      Name: "Green",
    },
    {
      Name: "yellow",
    },
    {
      Name: "blue",
    },
    {
      Name: "olive",
    },
    {
      Name: "pink",
    },
    {
      Name: "white",
    },
    {
      Name: "black",
    },
  ];
  const [color, setColor] = useState("red");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className=" flex flex-wrap justify-between gap-3 shadow-xl bg-white rounded-3xl px-3 py-2  ">
          {colorName.map((item, index) => (
            <button
              key={index}
              onClick={() => setColor(item.Name)}
              className={`outline-none px-4 py-1 rounded-full shadow-sm cursor-pointer ${item.Name === "black"? "text-white": "text-black" }`}
              style={{ backgroundColor: item.Name }}
            >
              {item.Name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
