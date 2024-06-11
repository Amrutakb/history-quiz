import React from 'react';
import './Home.css'; // Import the CSS file
import Tutorial from './Tutorial';

const Home = ({ startQuiz, showTutorial }) => {
  return (
    <div className="home-container">
      <h1 className="home-description">
        Ready to test your knowledge? Welcome to our Quiz Application!
      </h1>
      <p className="home-description1">
        Test your knowledge of Indian history with our carefully curated set of questions. Each question is designed to challenge your understanding of key events and dates. But that's not all - we've added an extra twist to keep you on your toes. With each question, you'll receive a hint in the form of a mathematical equation. Use your problem-solving skills to decode the hint and arrive at the correct answer - a year that marks a significant moment in Indian history. From the struggle for independence to iconic movements in the Indian history, our quiz covers a range of historical milestones. Whether you're a history buff or just looking for a fun way to learn, our quiz has something for everyone. So, are you ready to put your knowledge to the test? Dive in and start quizzing!
      </p>
      <div className="home-buttons">
        <button onClick={showTutorial}>Tutorial</button> 
        <button onClick={startQuiz}>Quiz</button>
      </div>
    </div>
  );
};

export default Home;