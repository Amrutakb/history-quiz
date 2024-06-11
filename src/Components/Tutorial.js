import React from 'react';

const Tutorial = () => {
  return (
    <div className="tutorial-container">
      <h1>Tutorial</h1>
      <p>
        Welcome to the tutorial for the History Quiz Application! This tutorial will guide you through the rules and mechanics of the quiz.
      </p>
      <h2>Quiz Overview</h2>
      <p>
        The quiz consists of multiple-choice questions related to Indian history. Each question is accompanied by a mathematical equation as a hint, which represents a significant year in Indian history.
      </p>
      <h2>Navigating the Quiz</h2>
      <ol>
        <li>
          <strong>Question:</strong> Each question will be displayed on the screen, along with its multiple-choice options.
        </li>
        <li>
          <strong>Selecting an Answer:</strong> To answer a question, click on the option you believe is correct.
        </li>
        <li>
          <strong>Hint:</strong> If you need a hint, click the "Hint" button to reveal the mathematical equation associated with the question. Use your problem-solving skills to solve the equation and determine the year it represents, which should help you identify the correct answer.
        </li>
        <li>
          <strong>Next Question:</strong> After selecting an answer, click the "Next Question" button to proceed to the next question in the quiz.
        </li>
      </ol>
      <h2>Quiz Completion</h2>
      <p>
        Once you've answered all the questions, the Quiz component will display your final score and a list of the questions you answered incorrectly, along with their correct answers. This feedback will help you identify the areas where you need to improve your knowledge of Indian history.
      </p>
      <h2>Tips and Strategies</h2>
      <ul>
        <li>Read each question carefully and consider all the options before selecting an answer.</li>
        <li>Don't hesitate to use the hint (mathematical equation) if you're unsure about the answer.</li>
        <li>Take your time and don't rush through the questions.</li>
        <li>If you're stuck on a question, move on and come back to it later.</li>
      </ul>
      <p>
        We hope this tutorial has provided you with a clear understanding of how to navigate and complete the History Quiz. Good luck, and have fun!
      </p>
    </div>
  );
};

export default Tutorial;