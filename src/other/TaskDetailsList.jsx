import React from "react";

const TaskDetailsList = ({ loggedInUserData }) => {
  return (
    <div className="flex mt-10 justify-between gap-5 screen">
      <div className="rounded-xl h-40 w-1/2 bg-blue-400 py-6 px-9">
        <h2 className="text-3xl font-semibold">
          {loggedInUserData.taskCounts.active}
        </h2>
        <h3 className="text-xl font-medium">Active</h3>
      </div>
      <div className="rounded-xl h-40 w-1/2 bg-green-400 py-6 px-9">
        <h2 className="text-3xl font-semibold">
          {loggedInUserData.taskCounts.completed}
        </h2>
        <h3 className="text-xl font-medium">Completed</h3>
      </div>
      <div className="rounded-xl h-40 w-1/2 bg-red-400 py-6 px-9">
        <h2 className="text-3xl font-semibold">
          {loggedInUserData.taskCounts.failed}
        </h2>
        <h3 className="text-xl font-medium">Failed</h3>
      </div>
      <div className="rounded-xl h-40 w-1/2 bg-yellow-400 py-6 px-9">
        <h2 className="text-3xl font-semibold">
          {loggedInUserData.taskCounts.newTask}
        </h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
    </div>
  );
};

export default TaskDetailsList;
