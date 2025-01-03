import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className="flex-shrink-0 w-[30%] bg-yellow-500 rounded-xl px-3 gap-2 items-start pt-3 ">
    <div className="flex justify-between">
      <h3 className=" bg-red-600 px-2 py-1 rounded">{data.category}</h3>
      <h4 className="font-medium">{data.taskDate}</h4>
    </div>
    <h1 className="font-semibold text-2xl mt-9">{data.taskTitle}</h1>
    <h2 className="font-light mt-2">
      {data.taskDescription}
    </h2>
    <div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-14">
          Accept Task
        </button>
    </div>
  </div>
  )
}

export default NewTask