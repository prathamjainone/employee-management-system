import React from "react";

const TaskForm = () => {
  return (
    <div className=" p-8 rounded-lg shadow-lg w-full mt-6 mx-auto bg-neutral-900">
      <form className="grid grid-cols-2 gap-6">
        <div>
          <div className="col-span-1">
            <label htmlFor="task-title" className="block text-gray-300 mb-2">
              Task Title
            </label>
            <input
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
              type="text"
              id="date"
              placeholder="dd/mm/yyyy"
              className="w-full px-4 py-2 bg-[#111] border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="assign-to" className="block text-gray-300 mb-2">
              Assign to
            </label>
            <input
              type="text"
              id="assign-to"
              placeholder="employee name"
              className="w-full px-4 py-2 bg-[#111] border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="category" className="block text-gray-300 mb-2">
              Category
            </label>
            <input
              type="text"
              id="category"
              placeholder="design, dev, etc"
              className="w-full px-4 py-2 bg-[#111] border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>
        </div>
       <div className="flex flex-col justify-between">
       <div className="col-span-2">
          {" "}
          <label htmlFor="description" className="block text-gray-300 mb-2">
            {" "}
            Description{" "}
          </label>{" "}
          <textarea
            id="description"
            rows="5"
            placeholder=""
            className="w-full px-4 py-2 bg-[#111] border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
          ></textarea>{" "}
        </div>{" "}
        <div className="col-span-2 flex justify-end">
          {" "}
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-green-600 transition"
          >
            {" "}
            Create Task{" "}
          </button>{" "}
        </div>
       </div>
      </form>
    </div>
  );
};

export default TaskForm;
