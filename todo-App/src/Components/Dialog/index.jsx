import React, { useContext, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import { DialogActions, DialogContent, DialogTitle } from "@mui/material";
import Button from "@mui/material/Button";
import { ToDoContext } from "../../Context";

const DialogComponent = () => {
  const { handleClose, selectedTask, open } = useContext(ToDoContext);

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        {selectedTask ? (
          <>
            <DialogTitle>Task-no: {selectedTask.id}</DialogTitle>
            <DialogContent>
              <p>Content: {selectedTask.todo}</p>
            
      
             <p>Completed:{selectedTask?.completed.toString() === 'true' ? 'YES' : 'NO'}</p>

            
              
              
              <p>
                Completion Time:{" "}
                {selectedTask.completedAt
                  ? selectedTask.completedAt
                  : "Not completed yet"}
              </p>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
            </DialogActions>
          </>
        ) : (
          <DialogTitle>No task selected</DialogTitle>
        )}
      </Dialog>
    </div>
  );
};

export default DialogComponent;
