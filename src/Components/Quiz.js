// Quiz.js
import React, { useState } from 'react';

const Quiz = () => {
  const questions = [
    {
      question: 'When did World War II end?',
      options: ['1945', '1939', '1950', '1941'],
      answer: '1945',
      hint: '2000 - 55',
    },
    {
      question: 'When did India gain independence from British rule?',
      options: ['1945', '1939', '1947', '1941'],
      answer: '1947',
      hint: '1900 + (5 * 9) + 2',
    },
    {
      question: 'When was the Indian Constitution adopted?',
      options: ['1950', '1947', '1949', '1952'],
      answer: '1950',
      hint: '1900 + ((20 - 9) * 5) - 5',
    },
    {
      question: 'In which year did the first successful powered airplane flight occur?',
      options: ['1903', '1899', '1907', '1911'],
      answer: '1903',
      hint: '1900 + 3',
    },
    {
      question: 'When was the Berlin Wall demolished?',
      options: ['1989', '1991', '1975', '1961'],
      answer: '1989',
      hint: '2000 - 11'
    },
    {
      question: 'In which year did Nelson Mandela become the first black President of South Africa?',
      options: ['1994', '1990', '1985', '2000'],
      answer: '1994',
      hint: '1000 * 2 - 6 + 2'
    },
    {
      question: 'When was the first successful human heart transplant performed?',
      options: ['1967', '1975', '1950', '1980'],
      answer: '1967',
      hint: '2000 - 33'
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState([]);

  const handleOptionClick = (option) => {
    if (selectedOption === '') {
      setSelectedOption(option);
      if (option === questions[currentQuestion].answer) {
        setScore(score + 1);
      } else {
        setWrongAnswers([
          ...wrongAnswers,
          {
            question: questions[currentQuestion].question,
            answer: questions[currentQuestion].answer,
          },
        ]);
      }
      setAttempts(attempts + 1);
    }
  };

  const handleHintClick = () => {
    if (showHint === false) {
      setShowHint(true);
      setAttempts(attempts + 1);
    }
  };

  const getNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption('');
      setShowHint(false);
    } else {
      setQuizFinished(true);
    }
  };

  return (
    <div className="container">
      {quizFinished ? (
        <div>
          <h2>Quiz finished!</h2>
          <p>Your score: {score}/{questions.length}</p>
          {wrongAnswers.length > 0 && (
            <div>
              <h3>Wrongly answered questions:</h3>
              {wrongAnswers.map((answer, index) => (
                <p key={index}>
                  {answer.question} - Correct answer: {answer.answer}
                </p>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          <div>
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                disabled={selectedOption !== ''}
              >
                {option}
              </button>
            ))}
          </div>
          <button onClick={handleHintClick} disabled={showHint || selectedOption !== ''}>
            Hint
          </button>
          {showHint && (
            <div>
              <p>Hint: {questions[currentQuestion].hint}</p>
            </div>
          )}
          {selectedOption !== '' && (
            <div>
              <p>You have selected: {selectedOption}</p>
            </div>
          )}
          <button onClick={getNextQuestion}>Next Question</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;