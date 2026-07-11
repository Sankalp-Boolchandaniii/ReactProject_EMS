import React from "react";
import Header from "../../other/Header";
import TaskDetailsList from "../../other/TaskDetailsList";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ loggedInUserData }) => {
  console.log(loggedInUserData);
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header loggedInUserData={loggedInUserData} />
      <TaskDetailsList loggedInUserData={loggedInUserData} />
      <TaskList loggedInUserData={loggedInUserData} />
    </div>
  );
};

export default EmployeeDashboard;
