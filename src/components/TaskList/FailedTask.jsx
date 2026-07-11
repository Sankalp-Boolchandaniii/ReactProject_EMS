import React from "react";

const FailedTask = ({ taskDetails }) => {
  return (
    <div className="shrink-0 h-full w-75 bg-red-400 p-5 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {taskDetails.category}
        </h3>
        <h4 className="text-sm">{taskDetails.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{taskDetails.taskTitle}</h2>
      <p className="text-sm mt-2">{taskDetails.taskDescription}</p>
      <span className="flex mt-4 justify-center border-2 border-black">
        Failed
      </span>
    </div>
  );
};

export default FailedTask;
