import React from "react";
import Progresswrapper from "../Progressbars/Progresswrapper";
import { UilArrowCircleRight } from "@iconscout/react-unicons";

function Pathcard({ completion, title }) {
  return (
    <div className="relative mx-auto flex w-fit max-w-md flex-row items-center justify-between rounded-2xl shadow-lg p-5 hover:bg-gray-100 m-3">
      <Progresswrapper
        type="circular"
        progressVal={completion}
        color={"green"}
        containerSize={125}
      />
      <span className="text-3xl font-bold">Resume {title}</span>
      <UilArrowCircleRight className="absolute bottom-0 right-0 h-12 w-12 rounded-xl m-2" />
    </div>
  );
}

export default Pathcard;
