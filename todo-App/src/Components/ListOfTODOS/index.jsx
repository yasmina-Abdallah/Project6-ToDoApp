import { ToDoContext } from "../../Context";
import GridAdd from "../LastAdd";
import ToDoItem from "../TODOitem";
import { useContext } from "react";

const ListOfTodos = () => {
    const { listOfTodos, loading,allTodos } = useContext(ToDoContext);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (!listOfTodos.length) {
      return <div>No tasks available.</div>;
    }
  
    return (
     <div className="flex flex-col mt-20 mr-20 mb-10 dark:bg-gray-950">
        <div className="lg:grid grid-cols-4 gap-4 ">
          {listOfTodos.length > 0 ? (
            listOfTodos.map((singleItem) => (
              <ToDoItem key={singleItem.id} singleItem={singleItem} />
            ))
          ) : (
            <p>No todos found.</p>
          )}
      <GridAdd/>
        </div>
  
      </div>
    );
  };
  
  export default ListOfTodos;
  