import React, { useState } from "react";
import { Context } from "../../context/AuthContext";
import { useContext } from "react";

const TaskForm = () => {

  const [userData,setUserData] = useContext(Context);


  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    // Create the task object
    const newTask = {
      active: true,
      newTask: false,
      completed: false,
      failed: false,
      taskTitle,
      taskDescription: description,
      taskDate,
      category,
      assignTo,
    };

    const data = userData
    console.log(data);
    data.forEach((elem) => {
      if (elem.firstName === assignTo) {
        elem.taskCount.newTask = (elem.taskCount.newTask || 0) + 1;
        elem.tasks.push(newTask);
      }
    });

    setUserData(data)
    console.log(data);
    

    setAssignTo("");
    setCategory("");
    setDescription("");
    setTaskTitle("");
    setTaskDate("");
  };

  return (
    <div className="p-8 rounded-lg shadow-lg w-full mt-6 mx-auto bg-neutral-900">
      <form onSubmit={submitHandler} className="grid grid-cols-2 gap-6">
        <div>
          <div className="col-span-1">
            <label htmlFor="task-title" className="block text-gray-300 mb-2">
              Task Title
            </label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              id="task-title"
              placeholder="Make a UI design"
              className="w-full px-4 py-2 bg-[#111] border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="date" className="block text-gray-300 mb-2">
              Date
            </label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
              id="date"
              className="w-full px-4 py-2 bg-[#111] border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="assign-to" className="block text-gray-300 mb-2">
              Assign to
            </label>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              type="text"
              id="assign-to"
              placeholder="Employee name"
              className="w-full px-4 py-2 bg-[#111] border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="category" className="block text-gray-300 mb-2">
              Category
            </label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              id="category"
              placeholder="Design, Dev, etc."
              className="w-full px-4 py-2 bg-[#111] border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="col-span-2">
            <label htmlFor="description" className="block text-gray-300 mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="description"
              rows="5"
              className="w-full px-4 py-2 bg-[#111] border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
            ></textarea>
          </div>
          <div className="col-span-2 flex justify-end">
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-green-600 transition"
            >
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
