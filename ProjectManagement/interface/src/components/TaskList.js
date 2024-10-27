import React, { useState } from "react";
import { useTaskManager } from "../hooks/useTaskManager";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid2,
  Modal,
  TextField,
} from "@mui/material";

const TasksList = () => {
  const { tasks, addTask, removeTask, overdueTasks } = useTaskManager();
  const [open, setOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    TaskName: "",
    Description: "",
    Priority: "",
    Status: "Not Started",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddTask = () => {
    addTask(newTask);
    setNewTask({
      TaskName: "",
      Description: "",
      Priority: "",
      Status: "Not Started",
    });
    handleClose();
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Tasks
      </Typography>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add Task
      </Button>

      <Typography variant="h5" gutterBottom>
        Overdue Tasks ({overdueTasks.length})
      </Typography>
      {overdueTasks.map((task) => (
        <Typography key={task.TaskId}>{task.TaskName} - Overdue</Typography>
      ))}

      <Grid2 container spacing={3}>
        {tasks.map((task) => (
          <Grid2 item xs={12} sm={6} md={4} key={task.TaskId}>
            <Card>
              <CardContent>
                <Typography variant="h5">{task.TaskName}</Typography>
                <Typography>{task.Description}</Typography>
                <Typography>Priority: {task.Priority}</Typography>
                <Typography>Status: {task.Status}</Typography>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => removeTask(task.TaskId)}
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>

      <Modal open={open} onClose={handleClose}>
        <div
          style={{
            padding: "20px",
            backgroundColor: "white",
            borderRadius: "8px",
          }}
        >
          <h2>Add New Task</h2>
          <TextField
            label="Task Name"
            value={newTask.TaskName}
            onChange={(e) =>
              setNewTask({ ...newTask, TaskName: e.target.value })
            }
            fullWidth
          />
          <TextField
            label="Description"
            value={newTask.Description}
            onChange={(e) =>
              setNewTask({ ...newTask, Description: e.target.value })
            }
            fullWidth
          />
          <TextField
            label="Priority"
            value={newTask.Priority}
            onChange={(e) =>
              setNewTask({ ...newTask, Priority: e.target.value })
            }
            fullWidth
          />
          <Button onClick={handleAddTask}>Add Task</Button>
        </div>
      </Modal>
    </div>
  );
};

export default TasksList;
