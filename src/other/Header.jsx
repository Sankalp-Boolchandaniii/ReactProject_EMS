import React, { useEffect, useState } from "react";

const Header = ({ loggedInUserData }) => {
  const [name, setName] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    const loggedInUser = JSON.parse(storedUser);
    if (loggedInUser.role == "admin") {
      setName("Admin");
    } else {
      setName(loggedInUserData.firstName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.reload();
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">{name} 👋</span>
      </h1>
      <button
        onClick={handleLogout}
        className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
