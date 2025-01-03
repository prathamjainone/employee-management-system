import React from "react";
import Header from "../Others/Header";
import TaskNumbers from "../Others/TaskNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ changeUser, data }) => {
  return (
    <div className="p-10 h-screen">
      <Header changeUser={changeUser} data={data} />
      <TaskNumbers data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
