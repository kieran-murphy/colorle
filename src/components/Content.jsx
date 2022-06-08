import React, { useState } from "react";
import Answer from "./Answer";
import Grid from "./Grid";
import PlayAgain from "./PlayAgain";

const Content = () => {
  let answerRed = Math.floor(Math.random() * 256);
  let answerGreen = Math.floor(Math.random() * 256);
  let answerBlue = Math.floor(Math.random() * 256);
  let answerColors = { red: answerRed, green: answerGreen, blue: answerBlue };

  const [status, setStatus] = useState(true);

  return (
    <div className="flex justify-center w-full h-full">
      <div className="w-2/3 h-2/3 bg-content m-10 text-blue-100 outline outline-indigo-900 rounded-2xl flex flex-col flex-wrap p-10">
        <h1 className="text-3xl text-blue-100 p-4">Guess the color:</h1>
        {status ? (
          <>
            <Answer answerColors={answerColors} />
            <Grid answerColors={answerColors} setStatus={setStatus} />
          </>
        ) : (
          <PlayAgain setStatus={setStatus} />
        )}
      </div>
    </div>
  );
};

export default Content;
