import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import DashboardStats from "./DashboardStats";
import { fetchData } from "../services/api";

const Dashboard = () => {
  const [data, setData] = useState({
    totalProjects: 0,
    totalTasks: 0,
    inProgressTasks: 0,
    completedTasks: 0,
  });

  useEffect(() => {
    const getDashboardData = async () => {
      const projects = await fetchData("projects");
      const tasks = await fetchData("tasks");

      setData({
        totalProjects: projects.length,
        totalTasks: tasks.length,
        inProgressTasks: tasks.filter((task) => task.status === "In Progress")
          .length,
        completedTasks: tasks.filter((task) => task.status === "Completed")
          .length,
      });
    };

    getDashboardData();
  }, []);

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Dashboard</Typography>
        </Toolbar>
      </AppBar>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Your Dashboard
      </Typography>
      <DashboardStats data={data} />
    </Container>
  );
};

export default Dashboard;
