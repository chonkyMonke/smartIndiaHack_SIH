import React, { useState } from "react";

export default function App({ questions = [], setChecked }) {
  const questions = [
    {
      questionText: "What is the sum of 2 and 3?",
      answerOptions: [
        { answerText: "5", isCorrect: true },
        { answerText: "7", isCorrect: false },
        { answerText: "1", isCorrect: false },
        { answerText: "9", isCorrect: false },
      ],
    },
    {
      questionText: "What is the difference between 3 and 8?",
      answerOptions: [
        { answerText: "7", isCorrect: false },
        { answerText: "5", isCorrect: true },
        { answerText: "1", isCorrect: false },
        { answerText: "8", isCorrect: false },
      ],
    },
    {
      questionText:
        "Number of girls is 15, and number of boys is 7.Answer which one is greater?",
      answerOptions: [
        { answerText: "Girls", isCorrect: true },
        { answerText: "Boys", isCorrect: false },
      ],
    },
    {
      questionText:
        "A bakery had 100 cupcakes, Rahul bought 10, Sneha bought 40 cupcakes. How many cupcakes are remaining?",
      answerOptions: [
        { answerText: "50", isCorrect: true },
        { answerText: "23", isCorrect: false },
        { answerText: "35", isCorrect: false },
        { answerText: "45", isCorrect: false },
      ],
    },
    {
      questionText:
        "The spider climbs up 5 units up the pipe, the rain falls and he falls by 4 units down, how many units did it climb?",
      answerOptions: [
        { answerText: "0", isCorrect: false },
        { answerText: "1", isCorrect: true },
        { answerText: "5", isCorrect: false },
        { answerText: "9", isCorrect: false },
      ],
    },
    {
      questionText: "Who was the first Mughal Emperor?",
      answerOptions: [
        { answerText: "Babur", isCorrect: true },
        { answerText: "Akbar", isCorrect: true },
        { answerText: "Aurangzeb", isCorrect: false },
        { answerText: "Shah Rukh Khan", isCorrect: false },
      ],
    },
    {
      questionText: "At what age did Chandragupta Maurya become king?",
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
      answerOptions: [
        { answerText: "Mantle", isCorrect: false },
        { answerText: "Crust", isCorrect: false },
        { answerText: "Outer Core", isCorrect: true },
        { answerText: "Inner Core", isCorrect: false },
      ],
    },
    {
      questionText: "Transpiration from the leaves of trees is an example  of:",
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
      answerOptions: [
        { answerText: "urban land", isCorrect: false },
        { answerText: "Industrial Revolution", isCorrect: true },
        { answerText: "Rural Land", isCorrect: false },
        { answerText: "Parks and Preserves", isCorrect: false },
      ],
    },

    {
      questionText:
        "Which one among the following best describes an economic activity that is concerned with production of goods, extraction of minerals or the provision of services",
      answerOptions: [
        { answerText: "Agriculture", isCorrect: false },
        { answerText: "Raw Material", isCorrect: true },
        { answerText: "Industry", isCorrect: false },
        { answerText: "Manufacturing", isCorrect: false },
      ],
    },
    {
      questionText:
        "The ways in which the scale can be shown on the map includes",
      answerOptions: [
        { answerText: "By words", isCorrect: false },
        { answerText: "By the ratio", isCorrect: false },
        { answerText: "By the line", isCorrect: false },
        { answerText: "All of the above", isCorrect: true },
      ],
    },
    {
      questionText:
        "The greenhouse Effect is mainly due to the increase in atmospheric ",
      answerOptions: [
        { answerText: "Nitrogen", isCorrect: false },
        { answerText: "Carbon Dioxide", isCorrect: false },
        { answerText: "Ozone", isCorrect: false },
        { answerText: "Carbon Monoxide", isCorrect: true },
      ],
    },
    {
      questionText: "Arrangement of leaves on a stem or branch",
      answerOptions: [
        { answerText: "Venation", isCorrect: false },
        { answerText: "Vernation", isCorrect: false },
        { answerText: "Inflorescence", isCorrect: false },
        { answerText: "Phyllotaxy", isCorrect: true },
      ],
    },
    {
      questionText:
        "Which of the following best summarizes the central idea of the text?",
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
    {
      questionText: "Arrangement of leaves on a stem or branch",
      answerOptions: [
        { answerText: "Venation", isCorrect: false },
        { answerText: "Vernation", isCorrect: false },
        { answerText: "Inflorescence", isCorrect: false },
        { answerText: "Phyllotaxy", isCorrect: true },
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
    <div className="app flex-center flex ">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="flex flex-col ">
            <div className="question-section flex flex-col">
              <div className="question-count text-xl font-bold text-alt">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text text-lg font-semibold">
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
