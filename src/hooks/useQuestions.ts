const useQuestions = () => {
  const questions = [
    {
      questionText: "Melyik állatot hagytuk ki az állatkertben?",
      answerOptions: [
        {answerText: 'Cápa', isCorrect: true},
        {answerText: 'Oroszlán', isCorrect: false},
        {answerText: 'Fóka', isCorrect: false},
        {answerText: 'Teve', isCorrect: false},
      ],
    },
    {
      questionText: "Milyen volt az első pizza amit sütöttünk?",
      answerOptions: [
        {answerText: 'tökéletes', isCorrect: false},
        {answerText: 'égett', isCorrect: false},
        {answerText: 'csúnya de finom', isCorrect: true},
        {answerText: 'tejfölös', isCorrect: false},
      ],
    },
    {
      questionText: "third",
      answerOptions: [
        {answerText: 'first', isCorrect: true},
        {answerText: '2nd', isCorrect: false},
        {answerText: '3rd', isCorrect: false},
        {answerText: '4th', isCorrect: false},
      ],
    },
  ]
  return {questions};
}
export default useQuestions;