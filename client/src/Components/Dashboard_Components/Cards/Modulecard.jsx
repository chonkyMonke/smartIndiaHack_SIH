import React from "react";
import { Disclosure } from "@headlessui/react";
import { UilAngleRightB } from "@iconscout/react-unicons";
import Topiccard from "./Topiccard";
import Progresswrapper from "../Progressbars/Progresswrapper";
import { useRef } from "react";

function Modulecard({
  learningPath = {},
  percent = 0,
  lpQuery,
  i,
  handleUpdate,
}) {
  const topicCardRef = useRef();
  return (
    <div className=" w-full max-w-xl rounded-2xl bg-white p-2">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex min-h-fit w-full min-w-fit items-center justify-start gap-4 whitespace-nowrap rounded-lg py-2 text-left text-xl font-medium text-purple-900">
              <div
                className={`flex items-center justify-start gap-4 duration-300 ${
                  open ? "font-bold md:text-3xl" : ""
                } mr-5 text-first`}
              >
                <UilAngleRightB
                  className={`${
                    open ? "rotate-90 scale-150 transform" : ""
                  } h-5 w-5 text-first`}
                />
                <span className={`${open ? "transform" : ""} text-first`}>
                  {learningPath.classroomId.subject}
                </span>
              </div>
            </Disclosure.Button>
            <Disclosure.Panel className="px-2 pb-2 text-sm text-gray-500">
              <div className="m-2 w-full">
                <Progresswrapper
                  type="linear"
                  progressVal={percent}
                  time={20}
                  strokeSize={20}
                  containerSize={100}
                  fontSize={16}
                  color="orange"
                />
              </div>

              <div ref={topicCardRef}>
                {learningPath.learningOutcomes.map((item, j) => (
                  <Topiccard
                    title={item.name}
                    isDone={item.isDone}
                    key={item.id}
                    lpQuery={lpQuery}
                    i={i}
                    j={j}
                  />
                ))}
              </div>

              <button
                className=" m-1 mt-3 w-full cursor-pointer rounded-lg bg-first p-2 font-semibold text-white"
                onClick={() => {
                  // lpQuery.data.learningPath[i].learningOutcomes[j].isDone =
                  //   e.target.checked;
                  // console.log(e.target.checked);
                  console.log(
                    topicCardRef.current.children[1].children
                  );
                  for (i = 0; i < topicCardRef.current.children.length; i++) {
                    console.log(topicCardRef.current.children);
                  }
                  lpQuery.data.learningPath[i].learningOutcomes.forEach(
                    (e, i) => {
                      e.isDone = e.checked;
                    }
                  );

                  handleUpdate(i);
                }}
              >
                Submit
              </button>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default Modulecard;

// example Call
{
  /* <Modulecard topics={[{ id: 1, title: "Internet" },{ id: 2, title: "Internet2" }]} /> */
}
