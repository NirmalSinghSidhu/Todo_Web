// src/components/TaskBox.js
import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import "./TaskBox.css";

const TaskBox = ({ title, type }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleAddTask = async () => {
    if (taskTitle && description) {
      await addDoc(collection(db, "tasks"), {
        taskType: type,
        taskTitle,
        description,
        date: new serverTimestamp(),
      });
      setTaskTitle("");
      setDescription("");
      setShowModal(false);
      alert("Task added successfully!");
    } else {
      alert("Please fill in both Title and Description!");
    }
  };

  return (
    <div className="task-box text-center shadow-sm p-3 mb-5 bg-body rounded">
      <h3 className="text-primary">{title}</h3>
      <button
        className="btn btn-primary mt-3 add-task-btn"
        onClick={() => setShowModal(true)}
      >
        Add Task
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h4 className="mb-4 text-secondary">Add {type} Task</h4>
            <div className="form-group">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                rows="3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="mt-4 d-flex justify-content-end">
              <button
                className="btn btn-secondary me-2"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button className="btn btn-success" onClick={handleAddTask}>
                Save Task
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskBox;
