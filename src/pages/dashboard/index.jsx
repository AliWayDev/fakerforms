import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Templates } from "../../components/templates";
import { FilterButtons } from "./components/filter";

import { getAllTemplates } from "./api/all-templates";
import { getMyTemplates } from "./api/my-templates";

import useAuthStore from "../../global/store/authStore";
import useSearch from "../../global/store/searchStore";

export const Dashboard = () => {
  const navigate = useNavigate();
  const { refresh } = useParams();
  const { searchText } = useSearch();

  const isAuth = useAuthStore((state) => state.isAuthenticated);

  const [templates, setTemplates] = useState([]);
  const [filterButton, setFilterButton] = useState("all");

  useEffect(() => {
    (async () => {
      const templates =
        filterButton === "all" || !isAuth
          ? await getAllTemplates(searchText)
          : await getMyTemplates(searchText);

      setTemplates(templates);
    })();
  }, [filterButton, refresh, searchText, isAuth]);

  return (
    <div>
      <div className="mt-12">
        <p className="text-center my-4 font-bold text-xl">Public Templates</p>
      </div>

      {isAuth && (
        <div className="flex justify-between items-baseline">
          <FilterButtons
            setFilterButton={setFilterButton}
            filterButton={filterButton}
          />
          <button
            type="button"
            onClick={() => navigate("/create/template")}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Create Template
          </button>
        </div>
      )}

      {templates.length ? (
        <Templates data={templates} />
      ) : (
        templates.length <= 1 && (
          <p className="text-center py-4">No templates found!</p>
        )
      )}
    </div>
  );
};
