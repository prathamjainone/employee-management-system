import React from 'react'

const FailedTask = () => {
  return (
    <div className="flex-shrink-0 w-[30%] bg-green-500 rounded-xl px-3 gap-2 items-start pt-3 ">
        <div className="flex justify-between">
          <h3 className=" bg-red-600 px-2 py-1 rounded">High</h3>
          <h4 className="font-medium">1 Jan 2025</h4>
        </div>
        <h1 className="font-semibold text-2xl mt-9">Task 1</h1>
        <h2 className="font-light mt-2">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h2>
        <div>
            <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded mt-14">
              Failed
            </button>
  
        </div>
      </div>
  )
}

export default FailedTask