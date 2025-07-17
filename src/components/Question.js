import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 1) {
          onAnswered(false);
          return 10; // reset for next question
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeRemaining, onAnswered]);

  return (
    <div>
      <h1>{question.prompt}</h1>
      <ul>
        {question.answers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
      <p>{timeRemaining} seconds remaining</p>
    </div>
  );
}

export default Question;
