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
return <AcceptTask data={elem}/>
}
if(elem.newTask){
return <NewTask data={elem}/>}

if(elem.completed){
return <CompleteTask data={elem}/>}

if(elem.failed){
return <FailedTask data={elem}/>}

}
  )
}
</div>)}

export default TaskList;
