// @packages
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";

// @app
import { addTask, editTask } from "../../redux/features/tasks";

function TaskForm() {
  const [task, setTask] = useState({ title: "", description: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tasks = useSelector((state) => state?.tasks);
  const { id } = useParams();

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!id && task?.title !== "" && task?.description !== "") {
      dispatch(addTask({ ...task, id: uuid() }));
    }

    if (id) {
      dispatch(editTask(task));
    }

    navigate("/");
  };

  useEffect(() => {
    if (id) {
      setTask(tasks?.find((task) => task.id === id));
    }
  }, [id]);

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4">
      <label htmlFor="title" className="block text-sm font-bold mb-2">
        Task:
      </label>
      <input
        name="title"
        onChange={handleChange}
        placeholder="title"
        type="text"
        value={task?.title}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
      />
      <label htmlFor="description" className="block text-sm font-bold mb-2">
        Description:
      </label>
      <textarea
        name="description"
        onChange={handleChange}
        placeholder="description"
        value={task?.description}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
      />
      <button
        type="submit"
        className="bg-indigo-600 px-2 py-1 rounded-md text-md"
      >
        Send
      </button>
    </form>
  );
}

export default TaskForm;
