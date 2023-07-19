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
  
  export default LastCookieEater;