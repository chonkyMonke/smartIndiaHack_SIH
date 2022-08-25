import { useState } from "react";
import { UilComments } from "@iconscout/react-unicons";
import Chatbot from "../iFrame/Chatbot";

function MyChat() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <div className="fixed bottom-0 right-0 flex h-64 flex-col justify-end border border-gray-700 bg-white">
          <Chatbot />
          <button
            className="mx-auto my-2 w-3/5 rounded-md bg-alt p-2 text-altxt"
            onClick={() => {
              setOpen(false);
            }}
          >
            Ok Thanks!
          </button>
        </div>
      ) : (
        <div className="fixed bottom-10 right-5 flex flex-col justify-end border border-gray-700 bg-white">
          <button
            onClick={() => {
              setOpen(true);
            }}
            className="bg-alt text-altxt"
          >
            <UilComments className="w-8 h-8"/>
          </button>
        </div>
      )}
    </>
  );
}

export default MyChat;
