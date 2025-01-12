// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import TaskBox from "./components/TaskBox";
import TaskTable from "./components/TaskTable";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import NewTask from "./pages/NewTask";
import Ongoing from "./pages/Ongoing";
import Pending from "./pages/Pending";
import Completed from "./pages/Completed";
import MasterData from "./pages/MasterData";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`app ${theme}`}>
      <Router>
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <Routes>
          <Route path="/new-task" element={<NewTask />} />
          <Route path="/ongoing" element={<Ongoing />} />
          <Route path="/pending" element={<Pending />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/master-data" element={<MasterData />} />
        </Routes>
        <div className="main-content container-fluid">
          <h1 className="text-center text-primary">Todo App</h1>
          <p className="text-center">Simplify Your Tasks, Maximize Your Time</p>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <div>
                    <div className="task-section d-flex justify-content-around">
                      <TaskBox title="New Task" type="New" />
                      <TaskBox title="Ongoing" type="Ongoing" />
                      <TaskBox title="Pending" type="Pending" />
                      <TaskBox title="Completed" type="Completed" />
                    </div>
                    <TaskTable />
                  </div>
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
