import React from "react";
import { useNavigate } from "react-router-dom";

export const Templates = ({ data }) => {
  const navigate = useNavigate()

  return (
    <div className="flex justify-around gap-6 flex-wrap">
      {data &&
        data.map((i) => (
          <div
            key={i.template.id}
            className="py-3 px-3 w-[220px] border-[1px] border-gray-400 rounded-lg flex flex-col justify-between items-start"
          >
            <div>
              <p className="font-medium text-lg">{i.template.title}</p>
              <p className="text-sm">{i.template.description}</p>
              <p className="mt-2 text-sm">Topic: {i.template.topic}</p>
            </div>
            <button
              type="button"
              onClick={() => navigate(`/template/${i.template.id}`)}
              className="mt-3 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              See more
            </button>
          </div>
        ))}
    </div>
  );
};
