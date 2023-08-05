import React, { useEffect, useState } from 'react';

const Greeting = () => {
  const [randomGreeting, setRandomGreeting] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:3000/random_greeting')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setRandomGreeting(data.content))
      .catch((error) => console.log('Error fetching greeting:', error));
  }, []);

  return (
    <div>
      <h1>Random Greeting:</h1>
      <p>{randomGreeting}</p>
    </div>
  );
};

export default Greeting;
