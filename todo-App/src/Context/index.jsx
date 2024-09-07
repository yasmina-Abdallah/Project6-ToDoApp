import { createContext, useEffect, useState } from "react";



export const ToDoContext = createContext(null);

const ToDoProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [listOfTodos, setListOfTodos] = useState([]);
const[open,setOpen]=useState(false)
const[selectedTask,setSelectedTask]=useState(null)
const[completedAt,setCompletedAt]=useState(null)
const [allTodos, setAllTodos] = useState([]);
const [completedCount, setCompletedCount] = useState(0);
const [UncompletedCount, setUnCompletedCount] = useState(0);
const [AllCount, setAllCount] = useState(0);

const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    console.log(isDarkMode);
    

  };

const fetchListOfTodos = async () => {
  const storedTodos = localStorage.getItem("todos");

  if (storedTodos) {
    try {
      const parsedTodos = JSON.parse(storedTodos);
      setListOfTodos(parsedTodos);
    } catch (error) {
      console.error("Error parsing stored todos from localStorage:", error);
    } 
      setLoading(false);
    
  } else {
    try {
      const apiResponse = await fetch(`https://dummyjson.com/todos`);
      const res = await apiResponse.json();

      if (res && Array.isArray(res.todos)) {
        console.log("Loading todos from API before adding Group field:", res.todos);

        setListOfTodos(res.todos); 
        localStorage.setItem("todos", JSON.stringify(res.todos)); 
      } else {
        console.error("Invalid todos format from API:", res);
      }
    } catch (error) {
      console.error("Failed to fetch todos:", error);
    } finally {
      setLoading(false); 
    }
  }
};


  useEffect(() => {
    fetchListOfTodos();
    const storedTodos = localStorage.getItem("todos");
    const todosArray = storedTodos ? JSON.parse(storedTodos) : [];
    setAllTodos(todosArray);
    setListOfTodos(todosArray);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  
  }, [isDarkMode]);

  const updateTodos = (newTodos) => {
    setListOfTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };
  

  
  const addNewToDo = (task) => {
    if (task && task.todo) {
      const newTodos = [...allTodos, task];
      updateTodos(newTodos);
    } else {
      console.error("Invalid task format");
    }
  };


  
 

  const handleDone = (id) => {
    const updatedTodos = listOfTodos.map((task) => {
      if (task.id === id) {
        const completed = !task.completed;
        return {
          ...task,
          completed,
          completedAt: completed ? new Date().toLocaleString() : null,
        };
      }
      return task;
    });
    updateTodos(updatedTodos); 
  };

  
  

  const handleClose=()=>{
    setOpen(false)
    setSelectedTask(null)
  }


  const handleOpenDetails = (id) => {  
const task=listOfTodos.find((task)=>
task.id === id)

if(task){
console.log(task)
setSelectedTask(task)
setOpen(true)

  }
  }


  

  const handleFilterCompleted = () => {
    const completedTasks = allTodos.filter(task => task.completed === true);
    setListOfTodos(completedTasks);
    setCompletedCount(completedTasks.length)
  };

  const handleFilterUnCompleted = () => {
    const uncompletedTasks = allTodos.filter(task => task.completed === false);
    setListOfTodos(uncompletedTasks);
    setUnCompletedCount(uncompletedTasks.length)
  };

  const ShowAll = () => {
    setListOfTodos(allTodos);
    setAllCount(allTodos.length)
  };

  const handleDelete = (id) => {
    const updatedTodos = allTodos.filter(task => task.id !== id);
    console.log("The task with id " + id + " is deleted");
    setAllTodos(updatedTodos);
    setListOfTodos(updatedTodos); 
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };




  return (
    <ToDoContext.Provider
      value={{
        listOfTodos,
        loading,
        handleDone,
        handleOpenDetails,
        handleClose,
        selectedTask,
        open,
        completedAt,
        addNewToDo,
        handleDelete,
        handleFilterCompleted,
        handleFilterUnCompleted,
        ShowAll,
        completedCount,
        UncompletedCount,
       AllCount,
       toggleDarkMode,
       isDarkMode,
       allTodos
        
     
  
        
       
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoProvider;

