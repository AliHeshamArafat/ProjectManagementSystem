// src/components/DashboardStats.js
import React from "react";
import { Card, CardContent, Typography, Grid2 } from "@mui/material";

const DashboardStats = ({ data }) => {
  return (
    <Grid2 container spacing={3}>
      <Grid2 item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography variant="h5">{data.totalProjects}</Typography>
            <Typography color="textSecondary">Total Projects</Typography>
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography variant="h5">{data.totalTasks}</Typography>
            <Typography color="textSecondary">Total Tasks</Typography>
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography variant="h5">{data.inProgressTasks}</Typography>
            <Typography color="textSecondary">In Progress Tasks</Typography>
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography variant="h5">{data.completedTasks}</Typography>
            <Typography color="textSecondary">Completed Tasks</Typography>
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
  );
};

export default DashboardStats;
