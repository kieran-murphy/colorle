import React from "react";

const ColorSquare = ({ num, answer, answerColors, setStatus }) => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  const colorstyle = { "background-color": `RGB(${red}, ${green}, ${blue})` };
  const answerStyle = {
    "background-color": `RGB(${answerColors.red}, ${answerColors.green}, ${answerColors.blue})`,
  };

  const handleClick = () => {
    if (num === answer) {
      setStatus(false);
    }
  };

  return (
    <div
      style={num === answer ? answerStyle : colorstyle}
      className="w-28 h-28 rounded-xl cursor-pointer"
      onClick={() => {
        // alert(`${num} - ${answer}`);
        handleClick();
      }}
    >
      {/* {num === answer && <h1>XXX</h1>} */}
    </div>
  );
};

export default ColorSquare;
