//@packages
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// @app
import { deleteTask } from "../../redux/features/tasks";

function TaskList() {
  const tasks = useSelector((state) => state?.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="w-4/6">
      <header className="flex justify-between items-center py-4">
        <h1 className="underline text-2xl font-['Laila']">Tasks</h1>
        <Link
          to="/create-task"
          className="bg-indigo-600 px-2 py-1 rounded-md text-md"
        >
          Create Task
        </Link>
      </header>
      <div className="grid grid-cols-3 gap-3">
        {tasks?.map(({ description, id, title }) => (
          <div key={id} className="bg-neutral-800 p-4 rounded-md">
            <header className="flex justify-between">
              <h3>{title}</h3>
              <div className="flex gap-x-2">
                <Link
                  to={`/edit-task/${id}`}
                  className="bg-zinc-600 px-2 py-1 text-sm rounded-md"
                >
                  Edit task
                </Link>
                <button
                  onClick={() => handleDelete(id)}
                  className="bg-red-500 px-2 py-1 text-sm rounded-md"
                >
                  Delete
                </button>
              </div>
            </header>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
