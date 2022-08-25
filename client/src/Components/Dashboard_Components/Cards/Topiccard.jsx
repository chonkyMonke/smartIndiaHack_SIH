import React from "react";

function Topiccard({ title, isDone=false, lpQuery, i, j }) {
  return (
    <div className="m-2 flex w-full items-center rounded-md bg-white p-3 py-4 shadow-md hover:bg-gray-100">
      <input
        type="checkbox"
        defaultChecked={isDone}
        disabled={isDone}
        className={`m-1 h-4 w-4 rounded accent-orange-600 `}
        onChange={(e)=>{lpQuery.data.learningPath[i].learningOutcomes[j].isDone = e.target.checked;}}
      />
      <span className="m-1 grow text-xl font-semibold">{title}</span>
    </div>
  );
}

export default Topiccard;
