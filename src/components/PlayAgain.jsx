import React from "react";
import { motion } from 'framer-motion';

const PlayAgain = ({ setStatus }) => {
  return (
    <motion.div
      className="cursor-pointer w-40 h-16 bg-blue-700 text-center rounded-xl"
      onClick={() => setStatus(true)}
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 1.1 }}
    >
      <h1 className="text-xl pt-4">Play Again?</h1>
    </motion.div>
  );
};

export default PlayAgain;
