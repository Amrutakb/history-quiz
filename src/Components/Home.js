// Home.js
import React from 'react';

const Home = ({ startQuiz }) => {
  return (
    <div>
      <h2>Welcome to the History Quiz App!</h2>
      <p>Ready to test your knowledge?</p>
      <button onClick={startQuiz}>Start Quiz</button>
    </div>
  );
};

export default Home;