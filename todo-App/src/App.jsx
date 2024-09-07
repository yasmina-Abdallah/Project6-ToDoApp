import HeaderToDo from "./Components/Header"
import ListOfTodos from "./Components/ListOfTODOS"
import MenuToDo from "./Components/Menu"


function App() {
  return (
   
    <div className='flex dark:bg-gray-950'>

   <MenuToDo/>
     
      <div className='flex flex-col ml-[300px] '>
        <HeaderToDo/>
       
       <ListOfTodos/>
     
      </div>
     

    </div>
  )
}

export default App


