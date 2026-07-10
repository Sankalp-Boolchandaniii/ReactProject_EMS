import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  console.log(authData);

  function handleLogin(email, password) {
    if (authData) {
      if (
        authData.admin &&
        email == authData.admin[0].email &&
        password == authData.admin[0].password
      ) {
        setUser("admin");
      } else if (
        authData.emp &&
        authData.emp.find((e) => e.email == email && e.password == password)
      ) {
        setUser("user");
      } else {
        alert("invalid creds");
      }
    } else {
      alert("no user found");
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
};

export default App;
