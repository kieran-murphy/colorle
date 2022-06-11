import React, {memo} from "react";
import { motion } from 'framer-motion'

const ColorSquare = ({ num, answer, answerColors, setStatus, addAttempt }) => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  const colorstyle = { "background-color": `RGB(${red}, ${green}, ${blue})` };
  const answerStyle = {
    "background-color": `RGB(${answerColors.red}, ${answerColors.green}, ${answerColors.blue})`,
  };

  const handleClick = () => {
    if (num === answer) {
      addAttempt();
      setStatus(false);
    } else {
      addAttempt();
    }
  };

  return (
    <motion.div
      style={num === answer ? answerStyle : colorstyle}
      className="lg:w-28 lg:h-28 w-14 h-14 rounded-xl cursor-pointer lg:mt-0 mt-2 "
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 1.1 }}
      onClick={() => {
        // alert(`${num} - ${answer}`);
        handleClick();
        
      }}
    >
      {/* {num === answer && <h1>XXX</h1>} */}
    </motion.div>
  );
};

export default ColorSquare;
