import { useEffect, useState } from "react";
import TodoList from "./components/todolist"
import { getAllTodo,addToDO, updateToDO, deleteToDO } from "./api/todolistapi";

function App() {
  const [toDo,setTodo] = useState([]);
  const [text,setText] = useState("");
  const [isUpdate,setUpdate] = useState(false);
  const [todoId,setTodoId] = useState("")

  useEffect(()=>{
    getAllTodo(setTodo)
  },[]);

  const updateMode=(_id,text)=>{
    setUpdate(true);
    setText(text);
    setTodoId(_id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>

        <div className="top">
          <input 
          type="text" 
          placeholder="Add Todos..."
          value={text}
          onChange={(e)=>setText(e.target.value)}
          />

          <div className="add" 
          onClick={isUpdate
          ?()=> updateToDO(todoId,text,setTodo,setText,setUpdate)
          :()=> addToDO(text,setText,setTodo)}
          >
          {isUpdate?"Update" : "Add"}
          </div>
        </div>

      <div className="list">
          { toDo.map((item)=>
              <TodoList key={item._id} 
              text={item.text} 
              updateMode={()=>updateMode(item._id,item.text)}
              deleteToDO={()=>deleteToDO(item._id,setTodo)}/>
          )
          } 
        
      </div>
      </div>     
    </div>
  );
}

export default App;