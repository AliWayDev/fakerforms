import React from "react";

export const FilterButtons = ({ setFilterButton, filterButton }) => {
  return (
    <div className="flex justify-center my-6">
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <button
          type="button"
          onClick={() => setFilterButton("all")}
          className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg ${
            filterButton === "all" &&
            "bg-gray-100 z-10 ring-2 ring-blue-700 text-blue-700"
          }`}
        >
          All
        </button>
        <button
          type="button"
          onClick={() => setFilterButton("my")}
          className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg ${
            filterButton === "my" &&
            "bg-gray-100 z-10 ring-2 ring-blue-700 text-blue-700"
          }`}
        >
          My templates
        </button>
      </div>
    </div>
  );
};
