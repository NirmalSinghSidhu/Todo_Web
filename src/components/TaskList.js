// src/components/TaskList.js
import React from "react";

const TaskList = ({ tasks }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Title</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.serialNo}</td>
            <td>{task.taskTitle}</td>
            <td>{task.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;
