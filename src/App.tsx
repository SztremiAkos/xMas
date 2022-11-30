import React, {useState} from 'react';
import './App.css';
import useQuestions from "./hooks/useQuestions";

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0)
  const [showVid, onShowVid] = useState(false)
  const {questions} = useQuestions();
  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1)
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) setCurrentQuestion(nextQuestion)
    else onShowVid(true);
  }
  const handleReset = () => {
    onShowVid(false);
    setScore(0);
    setCurrentQuestion(0);
  }
  return (
    <>
      <div className="reset">
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className="outer">
        <div className='app'>
          {showVid ? (
            <div className='score-section'>
              You scored {score} out of {questions.length}
            </div>
          ) : (
            <>
              <div className='question-count'><span>{questions[currentQuestion].questionText}</span></div>
              <div className='answer-section'>
                {questions[currentQuestion].answerOptions.map((answerOption) => (
                  <button onClick={() => handleAnswer(answerOption.isCorrect)}>{answerOption.answerText}</button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;