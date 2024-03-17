import { useState } from "react"

export function Todolist(){
const [todos, setTodos] = useState([])
const [inputValue, setInputValue] = useState("")


function eventHandler() {
    
    setTodos([...todos, inputValue])
    setInputValue("")
    console.log(inputValue)
};

function resetHandler(){
    setTodos([])
}

function deleteHandler(i){
    setTodos(todos.filter((e, index) => index !== i))
}


    return (
        <div>
            <h2>Todo List</h2>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}
                    <button onClick={()=> deleteHandler(index)}>Delete</button>
                    </li>
                ))}
            </ul>

            <div>
            <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
            <button onClick={eventHandler}>Aggiungi task</button>
            <button onClick={resetHandler}>Reset</button>
            </div>
        </div>
    )
}