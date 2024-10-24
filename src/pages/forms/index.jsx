import React from "react";
import { useNavigate } from "react-router-dom";

export const Forms = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="mt-12">
        <p className="text-center my-4 font-bold text-xl">Forms</p>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => navigate("/create/form")}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Create Form
        </button>
      </div>

      <p className="text-center">This page will work soon!</p>
    </div>
  );
};
