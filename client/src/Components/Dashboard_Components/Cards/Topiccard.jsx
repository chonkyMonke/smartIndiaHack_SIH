import React,{useState} from "react";
import MCQ from "../MCQ";

function Topiccard({ title, isDone = false, lpQuery, i, j }) {
  const [checked, setChecked] = useState(isDone)
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
  ];
  
  return (
    <div className="m-2 flex w-full flex-col items-center rounded-md bg-white p-3 py-4 shadow-md hover:bg-gray-100">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={checked}
          disabled={isDone}
          className={`m-1 h-4 w-4 rounded accent-orange-600 `}
          onChange={(e) => {
            lpQuery.data.learningPath[i].learningOutcomes[j].isDone =
              e.target.checked;
          }}
        />
        <span className="m-1 grow text-xl font-semibold">{title}</span>
      </div>
      <div className="">
        <MCQ questions={questions} setChecked={setChecked}/>
      </div>
    </div>
  );
}

export default Topiccard;
