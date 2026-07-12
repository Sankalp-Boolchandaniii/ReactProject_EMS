import React from "react";

const AllTask = ({ empData }) => {
  console.log(empData);
  return (
    <div id="tasklist" className="flex flex-col bg-[#1c1c1c] p-5 rounded mt-5">
      <div className="flex justify-between items-center rounded mb-2 bg-red-400 px-2 py-3">
        <h2 className="w-1/5 text-center">Name</h2>
        <h2 className="w-1/5 text-center">Active</h2>
        <h2 className="w-1/5 text-center">Completed</h2>
        <h2 className="w-1/5 text-center">Failed</h2>
        <h2 className="w-1/5 text-center">NewTask</h2>
      </div>
      {empData.map((elem, idx) => {
        return (
          <div className="flex justify-between items-center rounded mb-2 px-2 py-3 border-2 border-emerald-400">
            <h2 key={idx} className="w-1/5 text-center">
              {elem.firstName}
            </h2>
            <h2 key={idx} className="w-1/5 text-center">
              {elem.taskCounts.active}
            </h2>
            <h2 key={idx} className="w-1/5 text-center">
              {elem.taskCounts.completed}
            </h2>
            <h2 key={idx} className="w-1/5 text-center">
              {elem.taskCounts.failed}
            </h2>
            <h2 key={idx} className="w-1/5 text-center">
              {elem.taskCounts.newTask}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default AllTask;
