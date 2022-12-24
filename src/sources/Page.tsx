import Video from "./Video";
import React, {useState} from "react";
import useQuestions from "../hooks/useQuestions";
import {badAnswer, goodAnswer} from "../hooks/useAnswers";

const Page = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isHappyVisible, setIsHappyVisible] = useState(false);
  const [isSadVisible, setIsSadVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [score, setScore] = useState(0)
  const [showVid, onShowVid] = useState(false)
  const {questions} = useQuestions();

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setDisplayedText(goodAnswer[Math.floor(Math.random() * 4) + 1])
      setIsHappyVisible(true);
      setScore(score + 1)
      setTimeout(() => setIsHappyVisible(false), 2000);
    } else {
      setDisplayedText(badAnswer[Math.floor(Math.random() * 4) + 1])
      setTimeout(() => undefined, 20);
      setIsSadVisible(true);
      setTimeout(() => setIsSadVisible(false), 2000);
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
        <button onClick={handleReset}>Újra</button>
        <div className="score">
          <span>   Score: {score}</span>
        </div>
      </div>
      <div className="outer">
        <div className="feedBack">
          <div className="imageText">
            {(isSadVisible || isHappyVisible) && displayedText}
          </div>
          <div className="image">
            {isHappyVisible && <img className="img" src="panni.jpg" height={190 * 2} width={108 * 2} alt="panni"/>}
            {isSadVisible && <img className="img" src="aki.jpg" height={190 * 2} width={108 * 2} alt="sad"/>}
          </div>
        </div>
        {(!isHappyVisible && !isSadVisible) &&
            <div className='app'>
              {showVid ? (
                <div className='video'>
                  {score < questions.length / 2 ? <button onClick={handleReset}>Újra</button> :
                    <Video/>}
                </div>
              ) : (
                <>
                  {currentQuestion}/{questions.length}
                  <div className='question-count'><span>{questions[currentQuestion].question}</span></div>
                  <div className='answer-section'>
                    {questions[currentQuestion].answers.map((answerOption, index) => (
                      <button onClick={() => handleAnswer(answerOption.isCorrect)}>{answerOption.answerOption}</button>
                    ))}
                  </div>
                </>
              )}
            </div>}
      </div>
    </>
  );
};

export default Page;
