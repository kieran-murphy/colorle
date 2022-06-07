import React from 'react'

const Answer = ({answerColors}) => {
    return (
    <h1 className="text-xl text-blue-100 p-4">
            RGB({answerColors.red}, {answerColors.green}, {answerColors.blue})
        </h1>
  )
}

export default Answer