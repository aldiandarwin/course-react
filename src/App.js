import { useState } from "react"
import "./App.css"
import { Container, Form, Button, Stack, Card, Row, Col } from "react-bootstrap"
import { FaFolderPlus } from "react-icons/fa"
import Add from "./Add"
import List from "./List"

function App() {
  const [todoName, setTodoName] = useState("")
  const [todolist, setTodolist] = useState([])

  const addTodo = () => {
    const dataTodo = { todoName, status: false }
    setTodolist([dataTodo, ...todolist])
    setTodoName("")
  }
  const deleteTodo = (index) => {
    setTodolist(todolist.filter((value, idx) => index !== idx))
  }
  const finishTodo = (index) => {
    const cloneTodoList = [...todolist]
    cloneTodoList[index].status = !cloneTodoList[index].status
    setTodolist(cloneTodoList)
  }

  const handleChangeTodoName = (e) => {
    const data = e.target.value
    setTodoName(data)
  }
  console.log(todolist)

  return (
    <Container>
      <h1 className="text-center mt-5">to do web app</h1>

      {/* input todo */}

      <Add
        handleChangeTodoName={handleChangeTodoName}
        todoName={todoName}
        addTodo={addTodo}
      />

      {/* list todo */}

      <div className="mt-5">
        <List
          todolist={todolist}
          deleteTodo={deleteTodo}
          finishTodo={finishTodo}
        />
      </div>
    </Container>
  )
}

export default App
