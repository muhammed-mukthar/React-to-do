import { useState } from "react";
import "./App.css";

function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setToDo] = useState("");
  function removetask(obj){
    setTodos(toDos.filter((todo)=>todo.id != obj.id))
  
    
  }
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Tasks to catch up 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          type="text"
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() =>
            setTodos([...toDos, { id: Date.now(), text: toDo, status: false }])
          }
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => {
          return (
            <div className="todo">
              <div className="left">
                <input
                  value={obj.status}
                  onChange={(e) => {
                    console.log(e.target.value);
                    console.log(obj);
                    setTodos(toDos.filter(obj2=>{
                      if(obj2.id === obj.id){
                        obj2.status=e.target.checked
                      }
                      return obj2
                    }
                   
                      ))
                  }}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>{obj.text}</p>
                
              </div>
              <div className="right">
                <i className="fas fa-times" onClick={()=> removetask(obj)}></i>
              </div>
            </div>
          );
        })}
        <br/>
        <h1>Tasks done</h1>
        {toDos.map((obj)=>{if(obj.status){
          return (
            <div className="todo">
          <h1 style={{color:"black",fontSize:"20px"}}>{obj.text}</h1>
           </div>)
         
        }
        return null
        
        })}
      </div>
    </div>
  );
}

export default App;
