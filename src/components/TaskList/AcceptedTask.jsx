import React from "react";

const AcceptedTask = ({ taskDetails }) => {
  return (
    <div className="shrink-0 h-full w-75 bg-blue-400 p-5 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {taskDetails.category}
        </h3>
        <h4 className="text-sm">{taskDetails.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{taskDetails.taskTitle}</h2>
      <p className="text-sm mt-2">{taskDetails.taskDescription}</p>
      <div className="flex justify-between">
        <button className="border-2 border-black mt-2 px-2 py-1 text-sm">
          Mark as Completed
        </button>
        <button className="border-2 border-black mt-2 px-2 py-1 text-sm">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptedTask;
