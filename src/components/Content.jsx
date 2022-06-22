import React, { useState, memo, useRef } from "react";
import namer from "color-namer"
import Answer from "./Answer";
import Grid from "./Grid";
import PlayAgain from "./PlayAgain";

const Content = () => {
  let answerRed = React.useRef(Math.floor(Math.random() * 256));
  let answerGreen = React.useRef(Math.floor(Math.random() * 256));
  let answerBlue = React.useRef(Math.floor(Math.random() * 256));
  let answerColors = { red: answerRed.current, green: answerGreen.current, blue: answerBlue.current };
  
  const name = React.useRef(namer(`rgb(${answerRed.current},${answerGreen.current},${answerBlue.current})`));
  // const textcolorstyle = { "color": `RGB(${answerRed}, ${answerGreen}, ${answerBlue})` };
  // console.log(name.current.pantone[0].name, `rgb(${answerRed.current},${answerGreen.current},${answerBlue.current})`);

  const [status, setStatus] = useState(true);
  const attempts = React.useRef(0);

  const addAttempt = () => {attempts.current++};
  const resetAttempts = () => {attempts.current = 0};

  const updateColorName = () => {
    answerRed.current = Math.floor(Math.random() * 256);
    answerGreen.current = Math.floor(Math.random() * 256);
    answerBlue.current = Math.floor(Math.random() * 256);
    name.current = namer(`rgb(${answerRed.current},${answerGreen.current},${answerBlue.current})`);
  }

  return (
    <div className="flex justify-center w-full h-full">
      <div className="h-5/6 w-5/6 lg:bg-content my-10 py-10 text-blue-100 lg:outline outline-indigo-900 rounded-2xl flex flex-col text-center items-center">
        
        
        {status ? (
          <>
            <h1 className="text-3xl text-blue-100 p-4">Guess the color:</h1>
            <Answer answerColors={answerColors} />
            <Grid answerColors={answerColors} setStatus={setStatus} addAttempt={addAttempt} />
          </>
        ) : (
          <>
          <h1 className="text-3xl text-blue-100 p-4">The color was {name.current.pantone[0].name}</h1>
          <h1 className="text-3xl text-blue-100 p-4">Attempts: {attempts.current}</h1>
          <PlayAgain setStatus={setStatus} resetAttempts={resetAttempts} updateColorName={updateColorName}/>
          </>
        )}
      </div>
    </div>
  );
};

export default Content;
