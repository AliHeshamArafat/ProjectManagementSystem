import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import TaskList from "./components/TaskList";
import ProjectList from "./components/ProjectList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/projects/:id/tasks" element={<TaskList />} />
      </Routes>
    </Router>
  );
}

export default App;
