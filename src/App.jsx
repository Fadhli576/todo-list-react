import './App.css';
import { useEffect, useState } from 'react';
import TodoList from './TodoList';
import Create from './Create';
import Action from './Action';
import Edit from './Edit';

function App() {
  const [getTodos, setTodos] = useState((JSON.parse(localStorage.getItem('TodoData'))) || [])

  const [selectedStatus, setSelectedStatus] = useState('')

  const [selectedTodo, setSelectedTodo] = useState('')

  const [getTitle, setTitle] = useState('')

  const [getStatus, setStatus] = useState('')

  
  useEffect(() => {
    localStorage.setItem('TodoData', JSON.stringify(getTodos))
  },[getTodos])

  function handleTodoDelete(e) {
    const todoOld = window.localStorage.getItem('TodoData')
    const todoOldArr = JSON.parse(todoOld)
    const index = todoOldArr.findIndex((todo) => todo.id === e.currentTarget.id)

    todoOldArr.splice(index, 1)
   
    setTodos(todoOldArr)
    localStorage.setItem('TodoData', JSON.stringify(todoOldArr))
  }

  function handleTodo() {
        
    let modol = document.getElementById('modol')

    modol.classList.toggle("d-none")
  }

  function handleTodoClose() {
    let modol2 = document.getElementById('modol2')
    modol2.classList.remove("d-none")
  }

  function handleTodo2(e) {
    let todoOld = window.localStorage.getItem('TodoData')
    let todoOldArr = JSON.parse(todoOld)
    let index = todoOldArr.findIndex((todo) => todo.id === e.currentTarget.id)
    let modol2 = document.getElementById('modol2')

    modol2.classList.add("d-none")

    setSelectedTodo(index)
    setTitle(todoOldArr[index].title)
    setStatus(todoOldArr[index].status)
  }

  function handleSelected(e) {
     setSelectedStatus(e.currentTarget.value)
  }


  function handleFilter(todo) {
    if (selectedStatus === "") {
      return todo
    }
    else {
      return todo.status === selectedStatus
    }
  
  }

  function handleTodoEdit(e) {
    e.preventDefault()
    let todoOldArr = JSON.parse(window.localStorage.getItem('TodoData'))

    todoOldArr[selectedTodo] = {
      id :  Math.floor(Math.random() * 10000),
      title : getTitle,
      status : getStatus
    }

    setTodos(todoOldArr)
    localStorage.setItem('TodoData', JSON.stringify(todoOldArr))
}

function handleStatus(e) {
  const todoOld = window.localStorage.getItem('TodoData')
  const todoOldArr = JSON.parse(todoOld)
  const index = todoOldArr.findIndex((todo) => todo.id === e.currentTarget.id)
  let status = e.target
  status.classList.toggle('completed')


  if (e.target.className === "checkbox completed") {
    todoOldArr[index] = {
      id : Math.floor(Math.random() * 10000),
      title : todoOldArr[index].title,
      status : "completed"
    }
  } else if(e.target.className === "checkbox") {
    todoOldArr[index] = {
      id : Math.floor(Math.random() * 10000),
      title : todoOldArr[index].title,
      status : "uncompleted"
    }
  }

  setTodos(todoOldArr)
  localStorage.setItem('TodoData', JSON.stringify(todoOldArr))
}

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Action  handleTodo={handleTodo} handleSelected={handleSelected}/>
      <TodoList getTodos={getTodos.filter(handleFilter)} handleTodoDelete={handleTodoDelete} handleTodo2={handleTodo2} handleStatus={handleStatus} />
      <Create handleTodo={handleTodo} getTodos={getTodos} setTodos={setTodos} 
      getTitle={getTitle} setTitle={setTitle} getStatus={getStatus} setStatus={setStatus} />
      <Edit handleTodo2={handleTodo2} handleTodoClose={handleTodoClose} getTitle={getTitle} getStatus={getStatus} handleTodoEdit={handleTodoEdit} setStatus={setStatus} setTitle={setTitle} />
    </div>

        
  );
}

export default App;
