import React from "react";
import Header from "../../other/Header";
import TaskDetailsList from "../../other/TaskDetailsList";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = () => {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header />
      <TaskDetailsList />
      <TaskList />
    </div>
  );
};

export default EmployeeDashboard;
