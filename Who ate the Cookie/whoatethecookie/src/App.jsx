import { useState } from 'react';

const LastCookieEater = ({ input }) => {
  let name;

  if (typeof input === 'string') {
    name = 'Zach';
  } else if (typeof input === 'number') {
    name = 'Monica';
  } else {
    name = 'the dog';
  }

  return (
    <div>
      <p>Who ate the last cookie? It was {name}!</p>
    </div>
  );
};

const App = () => {
  const [input, setInput] = useState('');

  const handlePromptInput = () => {
    const userInput = prompt('Enter the input (string, number, or anything else):');
    setInput(userInput);
  };

  return (
    <div>
      <button onClick={handlePromptInput}>Enter Input</button>
      {input && <LastCookieEater input={input} />}
    </div>
  );
};

export default App;