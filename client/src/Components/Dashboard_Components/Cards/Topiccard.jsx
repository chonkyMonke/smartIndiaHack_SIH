import React from "react";


function Topiccard({ title }) {
  return (
    <div className="m-2 flex w-full items-center rounded-md bg-white hover:bg-gray-100 p-3 py-4 shadow-md">
      <input
        type="checkbox"
        className={`accent-violet-500 m-1 h-4 w-4 rounded checked:after:content-[${'*'}]`}
      />
      <span className="grow text-xl m-1 font-semibold">{title}</span>
    </div>
  );
}

export default Topiccard;
