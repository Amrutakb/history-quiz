// Home.js
import React from 'react';

const Home = ({ startQuiz, showTutorial }) => {
  return (
    <div>
      <h2>Welcome to the History Quiz App!</h2>
      <p>Ready to test your knowledge?</p>
      <nav>
        <ul>
          <li><button onClick={showTutorial}>Tutorial</button></li>
          <li><button onClick={startQuiz}>Quiz</button></li>
          <li><button>About</button></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;