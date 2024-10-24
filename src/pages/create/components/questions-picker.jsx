import React from "react";

import { globalVars } from "../../../global/vars";

export const QuestionsPicker = ({ addQuestion }) => {
  const Buttons = () => {
    return globalVars.types.map((i) => (
      <button
        key={i.type}
        type="button"
        onClick={() => addQuestion(i.type)}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        {i.text}
      </button>
    ));
  };

  return (
    <div className="flex justify-center gap-3 items-baseline">
      <p className="font-medium">Question types:</p>
      {Buttons()}
    </div>
  );
};
