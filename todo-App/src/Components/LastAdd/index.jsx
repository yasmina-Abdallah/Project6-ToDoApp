
import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { ToDoContext } from "../../Context";


const GridAdd = () => {
    const [open, setOpen] = useState(false);
    const { addNewToDo, listOfTodos } = useContext(ToDoContext);
    const [newTask, setNewTask] = useState({
      id: "",
      todo: "",
      completed: false,
    });
  
    const handleClickOpen = () =>{
     
       console.log("opened");
     setOpen(true)};
    const handleClose = () => {setOpen(false);
    
    }
  
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
      <div className="neon-border p-4 w-full flex justify-center items-center dark:bg-gray-900 ">
       
        
  
  
            <button onClick={handleClickOpen} className="dark:text-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-12">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
  
  </button>
          
  
  
  
  
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
  
  export default GridAdd;
  
  