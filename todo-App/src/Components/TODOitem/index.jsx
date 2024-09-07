import React, { useContext } from "react";

import Button from "@mui/material/Button";
import { ToDoContext } from "../../Context";

const ToDoItem = ({ singleItem }) => {
  const { handleDone, handleOpenDetails, handleDelete } =
    useContext(ToDoContext);

  if (!singleItem) return null;

  return (
    <div className="neon-border p-4 flex flex-col gap-3 w-full justify-between dark: dark:bg-gray-900 ">
      <div className="flex justify-between gap-2">
        <button onClick={() => handleDelete(singleItem.id)} className="dark:text-gray-100">
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
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>

        <Button variant="outlined" onClick={() => handleDone(singleItem.id)}>
          {singleItem.completed ? (
            <p className="font-semibold">Undo</p>
          ) : (
            <p className="font-semibold">Done</p>
          )}
        </Button>
      </div>
      <div
        className={` dark: dark:text-gray-100 font-sans text-base font-semibold ${singleItem.completed ? "line-through" : ""}`}
      >
        {typeof singleItem.todo === "string" ? singleItem.todo : "Invalid task"}
      </div>

      <div>
        <Button
          onClick={() => handleOpenDetails(singleItem.id)}
          variant="outlined"
        >
          <p className="font-semibold">View Details</p>
        </Button>
      </div>
    </div>
  );
};

export default ToDoItem;