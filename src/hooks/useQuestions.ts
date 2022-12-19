import rawQuestions from "./Questions.json";

export type Question = {
  question: string,
  answers: Answer[]
};

export type Answer = {
  answerOption: string,
  isCorrect: boolean
};

const useQuestions = () => ({
  questions: rawQuestions.map(x => ({
    question: x.Question,
    answers: createAnswers(x.Answers)
  }))
});

export default useQuestions;

const createAnswers = (Answers: {AnswerOption: string, isCorrect: boolean}[]) => {
  const answers: Answer[] = Answers.map(x => ({ answerOption: x.AnswerOption, isCorrect: x.isCorrect}));
  return answers;
}