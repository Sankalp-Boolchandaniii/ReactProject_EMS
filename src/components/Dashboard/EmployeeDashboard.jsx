import React from "react";
import Header from "../../other/Header";
import TaskDetailsList from "../../other/TaskDetailsList";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props) => {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header setUser={props.setUser} loggedInUserData={props.loggedInUserData} />
      <TaskDetailsList loggedInUserData={props.loggedInUserData} />
      <TaskList loggedInUserData={props.loggedInUserData} />
    </div>
  );
};

export default EmployeeDashboard;
