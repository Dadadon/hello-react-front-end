import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setRandomGreeting } from './actions'; // Import your action creator

const Greeting = ({ randomGreeting, setRandomGreeting }) => {
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

const mapStateToProps = (state) => ({
  randomGreeting: state.greeting.randomGreeting,
});

export default connect(mapStateToProps, { setRandomGreeting })(Greeting);
