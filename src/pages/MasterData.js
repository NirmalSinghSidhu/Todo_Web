// src/components/MasterData.js
import React, { useEffect, useState } from "react";
import { fetchTasks } from "../utils/fetchTasks";
import "./Data.css"; // Custom CSS file for advanced styling

const MasterData = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const unsubscribe = fetchTasks(setTasks);
    return () => unsubscribe();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">All Tasks</h2>
      <h4 className="text-center mb-4">See It All 👀</h4>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Date</th>
              <th>Type</th>
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
                <td>{task.taskType}</td>
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

export default MasterData;
