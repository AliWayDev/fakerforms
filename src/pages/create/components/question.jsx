import React, { useEffect, useState } from "react";

import { RemoveIcon } from "../../../global/icons/remove";

import { getQuestionType } from "../../../utils";


export const Question = ({ questionData, removeQuestion, onQuestionEdit }) => {
  const [title, setTitle] = useState(questionData.title);
  const [description, setDescription] = useState(questionData.description);

  useEffect(() => {
    onQuestionEdit(questionData.id, { title, description });
  }, [title, description]);

  return (
    <div className="my-6 border-[1px] border-gray-400 p-3 rounded-lg bg-white">
      <div className="flex justify-center">
        <div className="flex flex-col gap-1 cursor-grab">
          <div className="w-[30px] h-[2px] bg-gray-600"></div>
          <div className="w-[30px] h-[2px] bg-gray-600"></div>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="mb-4 font-sans">{getQuestionType(questionData.type)}</p>
        <div className="flex gap-6">
          <span className="text-sm font-sans">
            OrderId: {questionData.order_index + 1}
          </span>
          <span
            className="cursor-pointer"
            onClick={() => removeQuestion(questionData.id)}
          >
            <RemoveIcon />
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full">
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Title"
          required
        />
        <input
          type="text"
          id="desc"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Description"
          required
        />
      </div>
    </div>
  );
};
