// src/components/NewTask.js
import React, { useEffect, useState } from "react";
import { fetchTasks } from "../utils/fetchTasks";
import "./Data.css"; // Reuse the same CSS file for styling

const NewTask = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const unsubscribe = fetchTasks((fetchedTasks) => {
      setTasks(fetchedTasks.filter((task) => task.taskType === "New"));
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">New Tasks</h2>
      <h4 className="text-center  mb-4">🚀 Ready to Conquer!</h4>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Date</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.serialNo}</td>
                <td>
                  {task.date
                    ? new Date(task.date.seconds * 1000).toLocaleString()
                    : "Date not available"}
                </td>
                <td>{task.taskTitle}</td>
                <td>{task.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewTask;
