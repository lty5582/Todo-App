import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([
    {id: 0, content: "밥먹기"},
    {id: 1, content: "코딩 공부하기"},
    {id: 2, content: "당근 거래하기"},
  ])

  return ( 
  <>
    <TodoList todoList={todoList}  setTodoList={setTodoList}/>
    <hr/>
    <TodoInput todoList={todoList} setTodoList={setTodoList}/>
  </>
  )
}

function TodoInput({todoList, setTodoList}){  
  const [inputvalue, setInputValue] = useState('')
  return (
    <>
    <input value={inputvalue} onChange={(event) =>
      setInputValue(event.target.value)}/>

    <button onClick={() => {
      const newTodo = { id: Number(new Date()), content: inputvalue}
      const newTodoList =[...todoList, newTodo]
      setTodoList(newTodoList)
      setInputValue("")
    }}
    >
      추가하기</button>
    </>
  )
}
  
function TodoList({todoList, setTodoList}){
  return (
      <ul>
        {todoList.map((todo) => (
          <Todo key={todo.id} todo={todo} setTodoList={setTodoList}/>  
        ))}
    </ul>
  )
}

function Todo({todo, setTodoList}) {
  const [inputvalue, setInputValue] = useState('')
  return ( 
  <li>
    {todo.content}
    <input 
    value={inputvalue}
    onChange={(event) => setInputValue(event.target.value)}
    />
    <button onClick={() =>{
      setTodoList(prev => {
        return prev.map(el => {
          if(el.id === todo.id){
            return {...el, content: inputvalue}
          }
          return el
        })
      })
    }}>수정</button>
   <button
    onClick={() => {
      setTodoList(prev =>{
        return prev.filter(el => el.id !== todo.id)
    })
   }}>
    삭제
    </button>
  </li>
  )
}
  
export default App
