import React from "react";
import AcceptedTask from "./AcceptedTask";
import FailedTask from "./FailedTask";
import CompletedTask from "./CompletedTask";
import NewTask from "./NewTask";

const TaskList = ({ loggedInUserData }) => {
  return (
    <div
      id="tasklist"
      className="flex mt-10 overflow-x-auto w-full gap-5 flex-nowrap h-[55%] rounded-xl items-center justify-start"
    >
      {loggedInUserData.tasks.map((elem, idx) => {
        if (elem.newTask) {
          return <NewTask taskDetails = {elem} key={idx} />;
        }
        if (elem.active) {
          return <AcceptedTask taskDetails = {elem} key={idx} />;
        }
        if (elem.completed) {
          return <CompletedTask taskDetails = {elem} key={idx} />;
        }
        if (elem.failed) {
          return <FailedTask taskDetails = {elem} key={idx} />;
        }

        return null;
      })}
    </div>
  );
};

export default TaskList;
