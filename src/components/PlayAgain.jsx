import React from "react";

const PlayAgain = ({ setStatus }) => {
  return (
    <div
      className="cursor-pointer w-40 h-20 bg-red-500 text-center rounded-xl"
      onClick={() => setStatus(true)}
    >
      <h1 className="text-xl pt-4">Play Again?</h1>
    </div>
  );
};

export default PlayAgain;
