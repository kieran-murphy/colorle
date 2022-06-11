import React, {memo} from "react";
import ColorSquare from "./ColorSquare";
import { motion } from "framer-motion";

const Grid = ({ answerColors, setStatus, addAttempt }) => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  let answer = Math.floor(Math.random() * 9);

  return (
    <motion.div
      className="grid grid-cols-3 lg:w-[400px] lg:h-[400px] w-[200px] h-[200px] justify-center "
    >
      {numbers.map((n) => (
        <ColorSquare
          key={n}
          num={n}
          answer={answer}
          answerColors={answerColors}
          setStatus={setStatus}
          addAttempt={addAttempt}
        />
      ))}
    </motion.div>
  );
};

export default Grid;
