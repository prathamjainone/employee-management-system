import React from "react";

const TaskNumbers = ({data}) => {
  return (
    <div className="flex gap-7 mt-10">
      <div className="h-32 bg-red-600 w-1/4  px-3 py-2 text-xl rounded-lg">
      {data.taskCount.newTask} <div>New Task</div>
      </div>
      <div className="h-32 bg-blue-600 w-1/4 px-3 py-2 text-xl rounded-lg">
      {data.taskCount.active}<div>Active</div>
      </div>
      <div className="h-32 bg-green-600 w-1/4 px-3 py-2 text-xl rounded-lg">
      {data.taskCount.completed} <div>Completed</div>
      </div>
      <div className="h-32 bg-yellow-600 w-1/4 px-3 py-2 text-xl rounded-lg">
        {data.taskCount.failed} <div>Failed</div>
      </div>
    </div>
  );
};

export default TaskNumbers;
