import React from 'react'
import ColorSquare from './ColorSquare';

const Grid = ({answerColors}) => {

    const numbers = [0,1,2,3,4,5,6,7,8];
    let answer = Math.floor(Math.random() * 9);

    return (
    <div className='grid grid-cols-3 w-[400px] h-[400px]'>
        {numbers.map((n) =>
            <ColorSquare key={n} num={n} answer={answer} answerColors={answerColors} />
        )}
    </div>
  )
}

export default Grid