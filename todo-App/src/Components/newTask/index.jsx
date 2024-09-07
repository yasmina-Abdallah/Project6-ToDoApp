import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { ToDoContext } from "../../Context";

const NewTask = () => {
  const [open, setOpen] = useState(false);
  const { addNewToDo, listOfTodos } = useContext(ToDoContext);
  const [newTask, setNewTask] = useState({
    id: "",
    todo: "",
    completed: false,
  });

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    if (newTask.todo.trim() !== "") {
      const keys = Object.keys(listOfTodos);
      const lastRow = keys[keys.length - 1];
      const lastObject = listOfTodos[lastRow];
      const taskWithId = { ...newTask, id: lastObject.id + 1 };
      addNewToDo(taskWithId);
      handleClose();
      setNewTask({ id: "", todo: "", completed: false });
    }
  };

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        <p className="font-semibold">Add a New Task</p>
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a new task</DialogTitle>
        <DialogContent>
          <TextField
            autoComplete="off"
            autoFocus
            required
            margin="dense"
            name="todo"
            label="Task"
            type="text"
            fullWidth
            variant="standard"
            value={newTask.todo}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default NewTask;
