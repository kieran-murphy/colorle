import React, { useState, memo, useRef } from "react";
import Answer from "./Answer";
import Grid from "./Grid";
import PlayAgain from "./PlayAgain";

const Content = () => {
  let answerRed = Math.floor(Math.random() * 256);
  let answerGreen = Math.floor(Math.random() * 256);
  let answerBlue = Math.floor(Math.random() * 256);
  let answerColors = { red: answerRed, green: answerGreen, blue: answerBlue };
  

  const [status, setStatus] = useState(true);
  const attempts = React.useRef(0)

  const addAttempt = () => {attempts.current++};
  const resetAttempts = () => {attempts.current = 0};

  return (
    <div className="flex justify-center w-full h-full">
      <div className="h-5/6 w-5/6 lg:bg-content my-10 py-10 text-blue-100 lg:outline outline-indigo-900 rounded-2xl flex flex-col text-center items-center">
        <h1 className="text-3xl text-blue-100 p-4">Guess the color:</h1>
        
        {status ? (
          <>
            <Answer answerColors={answerColors} />
            <Grid answerColors={answerColors} setStatus={setStatus} addAttempt={addAttempt} />
          </>
        ) : (
          <>
          <h1 className="text-3xl text-blue-100 p-4">Attempts: {attempts.current}</h1>
          <PlayAgain setStatus={setStatus} resetAttempts={resetAttempts}/>
          </>
        )}
      </div>
    </div>
  );
};

export default Content;
