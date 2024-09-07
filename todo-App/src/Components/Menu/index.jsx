import { useState,useContext } from "react";
import { ToDoContext } from "../../Context";
import DialogComponent from "../Dialog";
import NewTask from "../newTask";

const MenuToDo = () => {
  const {
    handleFilterCompleted,
    handleFilterUnCompleted,
    ShowAll,
    completedCount,
    UncompletedCount,
    AllCount,
  } = useContext(ToDoContext);

  const [isOpen, setIsOpen] = useState(true);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button
        onClick={handleOpenMenu}
        className={`dark:text-gray-100 fixed top-4 left-4 z-50 text-black p-2 rounded ${
          isOpen ? "hidden" : "block"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      <div
        className={`flex flex-col justify-between fixed top-0 left-0 h-full w-64  dark:bg-[#1B2430] transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-40`}
      >
        <div className="flex justify-between items-center p-4">
          <p className="text-3xl font-bold dark:text-gray-100">Menu</p>
          <button onClick={handleCloseMenu} className="dark:text-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-4 flex flex-col gap-3">
          <p className="text-3xl font-bold dark:text-gray-100">Tasks</p>
          <div className="flex gap-4">
            <div className="flex flex-col gap-3 dark:text-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>
            </div>
            <div>
              <ul className="flex flex-col gap-3">
                <li className="flex gap-14">
                  <button
                    onClick={handleFilterCompleted}
                    className="cursor-pointer  dark:text-gray-100"
                  >
                    Completed
                  </button>
                  <p className="dark:text-gray-100">{completedCount}</p>
                </li>
                <li className="flex gap-9">
                  <button
                    onClick={handleFilterUnCompleted}
                    className="cursor-pointer  dark:text-gray-100"
                  >
                    UnCompleted
                  </button>
                  <p className="dark:text-gray-100">{UncompletedCount}</p>
                </li>
                <li className="flex justify-between">
                  <button
                    onClick={ShowAll}
                    className="cursor-pointer  dark:text-gray-100"
                  >
                    All Tasks
                  </button>
                  <p className="dark:text-gray-100">{AllCount}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-4">
          <DialogComponent />
          <div className="flex self-end">
            <NewTask />
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuToDo;
