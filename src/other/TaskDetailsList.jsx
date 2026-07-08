import React from "react";

const TaskDetailsList = () => {
  return (
    <div className="flex mt-10 justify-between gap-5 screen">
      <div className="rounded-xl h-40 w-1/2 bg-red-400 py-6 px-9">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">task name</h3>
      </div>
      <div className="rounded-xl h-40 w-1/2 bg-blue-400 py-6 px-9">
        <h2 className="text-3xl font-semibold">1</h2>
        <h3 className="text-xl font-medium">task name</h3>
      </div>
      <div className="rounded-xl h-40 w-1/2 bg-yellow-400 py-6 px-9">
        <h2 className="text-3xl font-semibold">2</h2>
        <h3 className="text-xl font-medium">task name</h3>
      </div>
      <div className="rounded-xl h-40 w-1/2 bg-green-400 py-6 px-9">
        <h2 className="text-3xl font-semibold">3</h2>
        <h3 className="text-xl font-medium">task name</h3>
      </div>
    </div>
  );
};

export default TaskDetailsList;
