import React from "react";
import useAuthStore from "../../../global/store/authStore";
import { useNavigate } from "react-router-dom";
import useSearch from "../../../global/store/searchStore";

export const Header = () => {
  const navigate = useNavigate();
  const isAuth = useAuthStore((state) => state.isAuthenticated);
  const name = localStorage.getItem("name");
  const { setSearchText } = useSearch();

  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const onSeach = (value) => {
    setSearchText(value);
  };

  return (
    <div>
      <div className="my-4 flex items-baseline justify-between gap-6">
        <div className="flex items-baseline gap-12">
          <p
            onClick={() => navigate("/")}
            className="font-semibold text-xl cursor-pointer"
          >
            FakeForms
          </p>
          <div>
            <input
              type="text"
              id="search"
              onChange={(e) => onSeach(e.target.value)}
              className="bg-gray-50 border w-[100%] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search templates..."
              required
            />
          </div>
          {isAuth && (
            <>
              <div className="underline cursor-pointer hover:text-blue-400">
                <p onClick={() => navigate("/forms")}>Forms</p>
              </div>
              <div className="underline cursor-pointer hover:text-blue-400">
                <p onClick={() => navigate("/answers")}>My Answers</p>
              </div>
            </>
          )}
        </div>

        <div className="flex justify-end items-baseline gap-6">
          <p className="font-semibold text-xl">Hello{isAuth && `, ${name}`}!</p>
          {isAuth ? (
            <button
              onClick={() => handleLogout()}
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
