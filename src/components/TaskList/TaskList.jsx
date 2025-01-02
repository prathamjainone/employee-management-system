import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  return (
    <div className="h-[56%] w-full  mt-10 gap-6 flex py-5 overflow-auto">
      {data. tasks.map((elem)=>{

if(elem.active){
return <AcceptTask />
}
if(elem.newTask){
return <NewTask/>}

if(elem.completed){
return <CompleteTask />}

if(elem.failed){
return <FailedTask />}

}
  )
}
</div>)}

export default TaskList;
