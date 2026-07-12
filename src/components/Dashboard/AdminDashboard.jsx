import React from "react";
import Header from "../../other/Header";
import CreateTask from "../TaskList/CreateTask";
import AllTask from "../TaskList/AllTask";

const AdminDashboard = ({ empData }) => {
  return (
    <div className="h-screen w-full p-7">
      <Header />
      <CreateTask />
      <AllTask empData={empData} />
    </div>
  );
};

export default AdminDashboard;
