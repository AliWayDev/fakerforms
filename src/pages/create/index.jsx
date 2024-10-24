import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Reorder } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

import { QuestionsPicker } from "./components/questions-picker";
import { Question } from "./components/question";

import { createTemplate } from "./api/createTemplate";

import {
  checkThePayloadCreateTemplate,
  getTitleOfActionsPage,
} from "../../utils";

export const Create = () => {
  const navigate = useNavigate();
  const { type } = useParams();

  const [questions, setQuestions] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [topic, setTopic] = useState("");
  const [isPublic, setIsPublic] = useState(true);

  const addQuestion = (type) => {
    let sample = {
      id: uuidv4(),
      title: "",
      description: "",
      type: type,
      order_index: questions.length,
    };

    setQuestions((p) => [...p, sample]);
  };

  const removeQuestion = (id) => {
    const sample = questions.filter((i) => i.id !== id);

    const updatedQuestions = sample.map((question, index) => ({
      ...question,
      order_index: index,
    }));

    setQuestions(updatedQuestions);
  };

  const onReorderHandler = (e) => {
    const reorderedQuestions = e.map((id) =>
      questions.find((q) => q.id === id)
    );

    const updatedQuestions = reorderedQuestions.map((question, index) => ({
      ...question,
      order_index: index,
    }));

    setQuestions(updatedQuestions);
  };

  const onQuestionEdit = (id, data) => {
    setQuestions(
      questions.map((question) =>
        question.id === id
          ? { ...question, title: data.title, description: data.description }
          : question
      )
    );
  };

  const createTemplateHandler = async () => {
    const sample = {};

    sample.id = localStorage.getItem('id');
    sample.template = {
      title: title,
      description: description,
      topic: topic,
      is_public: isPublic,
    };
    sample.questions = questions.map((i) => {
      return {
        title: i.title,
        description: i.description,
        type: i.type,
        is_visible_in_table: true,
        order_index: i.order_index,
      };
    });

    if (checkThePayloadCreateTemplate(sample)) {
      const res = await createTemplate(sample);

      if (res?.data) {
        navigate("/?refresh=true");
        toast.success(res?.msg);
      }
    } else {
      toast.error("Check the payload!");
    }
  };

  const submitForm = () => {
    switch (type) {
      case "template":
        return createTemplateHandler();
      case "form":
        navigate("/?refresh=true");
        return toast.success("This feature will come soon!");
      default:
        return 
    }
  };

  const isQuestions = () => {
    return (
      <div className="mt-12 mb-6">
        <p className="text-center my-4 font-medium text-lg">
          No questions added
        </p>
      </div>
    );
  };

  const isTypeOfCreation = () => {
    return (
      type !== "editForm" &&
      type !== "form" && (
        <>
          <input
            type="text"
            id="title"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Topic"
            required
          />
          <label className="inline-flex items-center mb-5 cursor-pointer">
            <input
              type="checkbox"
              value={isPublic}
              defaultChecked={isPublic}
              onChange={(e) => setIsPublic(e.target.checked)}
              className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Will it be Public
            </span>
          </label>
        </>
      )
    );
  };

  return (
    <div>
      <div className="mt-12 mb-6">
        <p className="text-center my-4 font-bold text-xl">
          {getTitleOfActionsPage(type)}
        </p>
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
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Description"
          required
        />
        {isTypeOfCreation()}
      </div>

      <div>
        <p className="text-center my-4 font-bold text-xl">Questions</p>

        <QuestionsPicker addQuestion={addQuestion} />

        {questions.length < 1 && isQuestions()}

        <Reorder.Group
          values={questions.map((i) => i.id)}
          onReorder={onReorderHandler}
        >
          {questions.map((i) => (
            <Reorder.Item key={i.id} value={i.id}>
              <Question
                questionData={i}
                removeQuestion={removeQuestion}
                onQuestionEdit={onQuestionEdit}
              />
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>

      <div className="flex justify-end w-full">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="text-gray-900 cursor-pointer bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={() => submitForm()}
          disabled={questions.length < 1}
          className={`text-white ${
            questions.length < 1 ? "cursor-not-allowed" : "cursor-pointer"
          } bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}
        >
          Create
        </button>
      </div>
    </div>
  );
};
