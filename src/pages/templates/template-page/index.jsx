import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Loader } from "../../../components/UI/Loader";

import { getQuestionType } from "../../../utils";
// import { getTemplate } from "../api/getTemplate";
import { toast } from "react-toastify";
import useMockDataStore from "../../../global/store/mockDataStore";

export const TemplatePage = () => {
  const navigate = useNavigate();
  const { templateId } = useParams();

  const templates = useMockDataStore((state) => state.templates);

  const [template, setTemplate] = useState(null);

  useEffect(() => {
    // (async () => {
    //   const templateData = await getTemplate(templateId);

    //   setTemplate(templateData);
    // })();
    console.log(templates, 'templates')
    let sample = templates.filter((i) => i.template.id === templateId);
    console.log(sample)
    setTemplate(sample[0]);
  }, [templateId]);

  return (
    <div>
      {!template && <Loader />}

      {template && (
        <>
          <div className="flex justify-between">
            <p className="font-medium text-xl py-3 pb-6">
              Template information:
            </p>
            <div>
              <button
                type="button"
                onClick={() => toast("Sorry, feature will be added soon :)")}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Create form with template
              </button>
              <button
                type="button"
                onClick={() => navigate("/?refresh=true")}
                className="text-gray-900 cursor-pointer bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Back to list
              </button>
            </div>
          </div>
          <div className="w-full border-[1px] border-gray-400 rounded-lg p-3 flex flex-col gap-2">
            <p className="font-sans">
              Title:
              <span className="font-medium pl-2">
                {template.template.title}
              </span>
            </p>
            <p className="font-sans">
              Description:
              <span className="font-medium pl-2">
                {template.template.description}
              </span>
            </p>
            <p className="font-sans">
              Topic:
              <span className="font-medium pl-2">
                {template.template.topic}
              </span>
            </p>
            <p className="font-sans">
              Status:
              <span className="font-medium pl-2">
                {template.template.is_public ? (
                  <span className="text-green-500">Public</span>
                ) : (
                  <span className="text-blue-500">Private</span>
                )}
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-3 my-6">
            <p className="font-medium text-xl py-3">Questions information:</p>
            {template.questions.map((i, index) => (
              <div
                key={index}
                className="w-full border-[1px] border-gray-400 rounded-lg p-3 flex flex-col gap-2"
              >
                <div className="mb-2">
                  <p className="font-sans">
                    Type:{" "}
                    <span className="font-medium">
                      {getQuestionType(i.type)}
                    </span>
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={i.title}
                    disabled
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Title"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="desc"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    id="desc"
                    value={i.description}
                    disabled
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Description"
                    required
                  />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
