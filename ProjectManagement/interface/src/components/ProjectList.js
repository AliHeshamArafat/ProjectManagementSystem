import React from "react";
import { useProjects } from "../hooks/useProjects";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";

const ProjectsList = () => {
  const projects = useProjects();

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.ProjectId}>
            <Card>
              <CardContent>
                <Typography variant="h5">{project.ProjectName}</Typography>
                <Typography>{project.Description}</Typography>
                <Typography>Budget: ${project.Budget}</Typography>
                <Button variant="outlined">Edit</Button>
                <Button variant="outlined" color="error">
                  Delete
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProjectsList;
