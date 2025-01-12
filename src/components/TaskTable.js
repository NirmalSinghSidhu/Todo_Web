import React, { useState, useEffect } from "react";
import { db } from "../firebase"; // Firebase Firestore
import {
  collection,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import "./TaskTable.css"; // Import custom styles

const TaskTable = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from Firestore
    const unsubscribe = onSnapshot(collection(db, "tasks"), (snapshot) => {
      const fetchedTasks = snapshot.docs.map((doc, index) => ({
        id: doc.id,
        serialNo: index + 1,
        ...doc.data(),
      }));
      setTasks(fetchedTasks);
    });
    return () => unsubscribe();
  }, []);

  // Delete Task
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "tasks", id));
      alert("Task deleted successfully!");
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  // Update Task
  const handleUpdate = async (id) => {
    const updatedTitle = prompt("Enter the new title:");
    const updatedDescription = prompt("Enter the new description:");
    const updatedDate = new Date().toISOString(); // Current timestamp
    if (updatedTitle && updatedDescription) {
      try {
        await updateDoc(doc(db, "tasks", id), {
          title: updatedTitle,
          description: updatedDescription,
          date: updatedDate,
        });
        alert("Task updated successfully!");
      } catch (error) {
        console.error("Error updating task:", error);
      }
    }
  };

  // Move Task to a Different Type
  const handleMove = async (id, newType) => {
    if (newType) {
      try {
        await updateDoc(doc(db, "tasks", id), {
          taskType: newType,
        });
        alert(`Task moved to ${newType} successfully!`);
      } catch (error) {
        console.error("Error moving task:", error);
      }
    }
  };

  return (
    <div className="task-table-container container mt-4">
      <h3 className="mb-4 text-center">Task Table</h3>
      <table className="table table-bordered table-hover">
        <thead className="table-primary">
          <tr>
            <th>S.No</th>
            <th>Task Type</th>
            <th>Title</th>
            <th>Description</th>
            <th>Date</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.serialNo}</td>
              <td>{task.taskType}</td>
              <td>{task.taskTitle}</td>
              <td>{task.description}</td>
              <td>
                {task.date
                  ? new Date(task.date.seconds * 1000).toLocaleString()
                  : "Date not available"}
              </td>
              <td data-label="Operations">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => handleUpdate(task.id)}
                >
                  Update
                </button>
                <select
                  className="form-select-sm"
                  onChange={(e) => handleMove(task.id, e.target.value)}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Move to...
                  </option>
                  <option value="New">New</option>
                  <option value="Ongoing">Ongoing</option>
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
