import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);
  console.log(authData);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  function handleLogin(email, password) {
    if (authData) {
      if (
        authData.admin &&
        email == authData.admin[0].email &&
        password == authData.admin[0].password
      ) {
        setUser("admin");
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "admin", data: authData.admin[0] }),
        );
      } else if (authData.emp) {
        const emp = authData.emp.find(
          (e) => e.email == email && e.password == password,
        );
        if (emp) {
          setLoggedInUserData(emp);
          setUser("employee");
          localStorage.setItem(
            "loggedInUser",
            JSON.stringify({ role: "employee", data: emp }),
          );
        }
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
      {user == "admin" ? (
        <AdminDashboard empData={authData.emp} setUser={setUser} />
      ) : user == "employee" ? (
        <EmployeeDashboard loggedInUserData={loggedInUserData} setUser={setUser} />
      ) : null}
    </>
  );
};

export default App;
