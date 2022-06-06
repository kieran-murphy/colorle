import React from 'react'
import Answer from './Answer';

const ColorSquare = ({num, answer}) => {
  
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    const colorstyle = {"background-color": `RGB(${red}, ${green}, ${blue})`};
  
    return (
    <div style={colorstyle} className='w-28 h-28 rounded-xl cursor-pointer' onClick={() => {
        alert(`${num} - ${answer}`);
    }}></div>
  )
}

export default ColorSquare