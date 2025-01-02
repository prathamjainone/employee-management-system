import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className="flex-shrink-0 w-[30%] bg-red-500 rounded-xl px-3 gap-2 items-start pt-3 ">
        <div className="flex justify-between">
          <h3 className=" bg-red-600 px-2 py-1 rounded">High</h3>
          <h4 className="font-medium">1 Jan 2025</h4>
        </div>
        <h1 className="font-semibold text-2xl mt-9">Task 1</h1>
        <h2 className="font-light mt-2">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h2>
        <div className="flex gap-2 mt-14">
          <button className="bg-green-600 text-white px-4 py-2 rounded-md">
            Mark as completed
          </button>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md">
            Mark as failed
          </button>
      </div>
      </div>
  )
}

export default AcceptTask