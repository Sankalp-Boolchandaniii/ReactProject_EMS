import React from "react";
import Header from "../../other/Header";
import CreateTask from "../TaskList/CreateTask";
import AllTask from "../TaskList/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full p-7">
      <Header setUser = {props.setUser}/>
      <CreateTask />
      <AllTask empData={props.empData} />
    </div>
  );
};

export default AdminDashboard;
