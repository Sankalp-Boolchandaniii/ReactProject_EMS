import React, { useState } from "react";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState(null);
  const [taskDate, setTaskDate] = useState(null);
  const [assignee, setAssignee] = useState(null);
  const [category, setCategory] = useState(null);
  const [taskDescription, setTaskDescription] = useState(null);
  const [newTask, setNewTask] = useState({});

  function submitHandler(e) {
    e.preventDefault();
    console.log(taskTitle, taskDate, assignee, category, taskDescription);
    setNewTask({
      active: false,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle,
      taskDate,
      category,
      taskDescription,
    });

    const employees = JSON.parse(localStorage.getItem("employees"));
    employees.forEach((emp) => {
      if (emp.firstName == assignee) {
        emp.tasks.push(newTask);
        console.log("added task to ", emp.firstName);
        console.log(emp.tasks);
      }
    });
    setTaskDate("");
    setTaskDescription("");
    setTaskTitle("");
    setAssignee("");
    setCategory("");
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex p-5 bg-[#1c1c1c] mt-7 rounded"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              placeholder="text"
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="date"
              placeholder="text"
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              placeholder="text"
              value={assignee}
              onChange={(e) => {
                setAssignee(e.target.value);
              }}
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              placeholder="text"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400"
            name=""
            id=""
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
