import React from 'react'

const AlphabetPosition = ({letter}) => {
    const getPosition  = (letter) =>{
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        const lowercaseLetter = letter.toLowerCase();
        const position = alphabet.indexOf(lowercaseLetter) +1
        return position
    };
  return (
    <div>
      <p>Input is  {letter}</p>
      <p>Output is {getPosition(letter)}</p>
    </div>
  )
}

export default AlphabetPosition
