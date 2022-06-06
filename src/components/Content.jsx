import React from "react";
import Answer from "./Answer";
import Grid from "./Grid";

const Content = () => {
  return (
    <div className="flex justify-center w-full h-full">
      <div className="w-2/3 h-2/3 bg-content m-10 text-blue-100 outline outline-indigo-900 rounded-2xl flex flex-col flex-wrap p-10">
        <h1 className="text-3xl text-blue-100 p-4">
            Guess the color:
        </h1>
        <Answer />
        <Grid />
      </div>
    </div>
  );
};

export default Content;