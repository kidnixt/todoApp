import 'bootstrap-css-only'
import { useState } from 'react'
import Layout from '../Pages/Layout/Layout'
import Login from '../Pages/Login'
import { useSelector } from 'react-redux'

const App = () => {
  //const [userLogged, setUser] = useState(null)
  const userLogged = useSelector((state) => state.user.user)
  const [todos, setTodos] = useState([])
  const onLogout = () => {}

  const onAddTodo = todo => {
    setTodos([...todos, todo])
  }
  const onComplete = todoId => {
    const todosModified = todos.map(todo => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(todosModified)
  }
  const onDeleteTodo = todoId => {
    // eslint-disable-next-line array-callback-return
    const todosModified = todos.filter(todo => {
      if (todo.id !== todoId) {
        return todo
      }
    })
    setTodos(todosModified)
  }
  return (
    <div className='App'>
      {userLogged ? (
        <Layout
          onLogout={onLogout}
          onAddTodo={onAddTodo}
          onComplete={onComplete}
          onDeleteTodo={onDeleteTodo}
          todos={todos}
          user={userLogged}
        />
      ) : (
        <Login/>
      )}
    </div>
  )
}

export default App
