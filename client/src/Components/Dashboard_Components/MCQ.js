import React, { useState } from "react";

export default function App( setChecked ) {
  const questions = [
    {
      questionText: "Who was the first Mughal Emperor?",
      subject: "History",
      answerOptions: [
        { answerText: "Babur", isCorrect: true },
        { answerText: "Akbar", isCorrect: true },
        { answerText: "Aurangzeb", isCorrect: false },
        { answerText: "Shah Rukh Khan", isCorrect: false },
      ],
    },
    {
      questionText: "At what age did Chandragupta Maurya become king?",
      subject: "History",
      answerOptions: [
        { answerText: "21", isCorrect: true },
        { answerText: "26", isCorrect: false },
        { answerText: "34", isCorrect: false },
        { answerText: "12", isCorrect: false },
      ],
    },
    {
      questionText:
        "The difference between the local time of any two consecutive longitude is",
      subject: "Geography",
      answerOptions: [
        { answerText: "15 minutes", isCorrect: false },
        { answerText: "04 minutes", isCorrect: true },
        { answerText: "30 minutes", isCorrect: false },
        { answerText: "60 minutes", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which part of the Earth's core is responsible for Earth's Field?",
      subject: "Geography",
      answerOptions: [
        { answerText: "Mantle", isCorrect: false },
        { answerText: "Crust", isCorrect: false },
        { answerText: "Outer Core", isCorrect: true },
        { answerText: "Inner Core", isCorrect: false },
      ],
    },
    {
      questionText: "Transpiration from the leaves of trees is an example  of:",
      subject: "EVS Part-1",
      answerOptions: [
        { answerText: "Evaporation", isCorrect: true },
        { answerText: "Sublimation", isCorrect: false },
        { answerText: "Condensation", isCorrect: false },
        { answerText: "Diffusion", isCorrect: false },
      ],
    },
    {
      questionText:
        "The mechanization of many jobs, which resulted in major population shifts from rural areas to urban areas",
      subject: "EVS Part-1",
      answerOptions: [
        { answerText: "urban land", isCorrect: false },
        { answerText: "Industrial Revolution", isCorrect: true },
        { answerText: "Rural Land", isCorrect: false },
        { answerText: "Parks and Preserves", isCorrect: false },
      ],
    },

    {
      questionText:
        "Which of the following best summarizes the central idea of the text?",
      subject: "English-I",
      answerOptions: [
        {
          answerText:
            "The actions of a large group can greatly influence an individual's actions.",
          isCorrect: true,
        },
        {
          answerText:
            "Herd behavior suggests that there are limits to human beings's free will.",
          isCorrect: false,
        },
        {
          answerText:
            "Crowds always become violent and chaotic when individuals begin to panic.",
          isCorrect: false,
        },
        {
          answerText:
            " Even when acting alone, humans are not as advanced as we would like to think",
          isCorrect: false,
        },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      if (currentQuestion + 1 >= questions.length) {
        console.log(score + 1 / questions.length);
        if (score + 1 / questions.length >= 0.5) {
          setChecked(true);
        } else {
          setChecked(false);
        }
        setScore(score + 1);
        // setChecked(true);
      }
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="flex app flex-center ">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="flex flex-col ">
            <div className="flex flex-col question-section">
              <div className="text-xl font-bold question-count text-alt">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="text-lg font-semibold question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="flex flex-col ">
              <div className="flex flex-col items-start justify-start">
                {questions[currentQuestion].answerOptions.map(
                  (answerOption) => (
                    <button
                      onClick={() => {
                        handleAnswerOptionClick(answerOption.isCorrect);
                        // if (currentQuestion + 1 >= questions.length) {
                        // 	console.log(score/questions.length)
                        //   if (score / questions.length >= 0.5) {
                        //     setChecked(true);
                        //   } else {
                        //     setChecked(false);
                        //   }
                        //   setChecked(true);
                        // }
                      }}
                    >
                      {answerOption.answerText}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
