import React from 'react'

const Answer = () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);


    return (
    <h1 className="text-xl text-blue-100 p-4">
            RGB({red}, {green}, {blue})
        </h1>
  )
}

export default Answer