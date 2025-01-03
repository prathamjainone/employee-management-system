import React, { useContext } from "react";
import { Context } from "../../context/AuthContext";

const AllTasks = () => {
  const [userData,setUserData] = useContext(Context);
  // console.log(authcontext.employees);

  return (
    <div className="mt-4 gap-2 flex flex-col h-44  bg-neutral-900 p-4 rounded-xl">
      <div className="rounded-xl  w-full  h-10 flex flex-shrink-0 justify-between items-center px-5 font-semibold">
        <div className="w-1/5 mx-2">First Name</div>
        <div className="w-1/5 mx-2">New Tasks</div>
        <div className="w-1/5 mx-2">Completed</div>
        <div className="w-1/5 mx-2">Failed</div>
        <div className="w-1/5 mx-2">Active</div>
      </div>

      <div className="overflow-auto gap-2 flex flex-col  bg-neutral-900 rounded-xl">
      {userData.map((elem) => {
        return (
          <div className="rounded-xl  w-full border-green-400 border-2 h-10 flex flex-shrink-0 justify-between items-center px-5 font-semibold ">
            <div className="w-1/5  mx-2">{elem.firstName}</div>
            <div className="w-1/5  mx-2">{elem.taskCount.newTask}</div>
            <div className="w-1/5  mx-2">{elem.taskCount.completed}</div>
            <div className="w-1/5  mx-2">{elem.taskCount.failed}</div>
            <div className="w-1/5  mx-2">{elem.taskCount.active}</div>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default AllTasks;
