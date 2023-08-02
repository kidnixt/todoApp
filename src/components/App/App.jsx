import 'bootstrap-css-only'
import { useState } from 'react'
import Layout from '../Pages/Layout/Layout'
import Login from '../Pages/Login'

const App = () => {
  const [userLogged, setUser] = useState(null)
  const [todos, setTodos] = useState([])
  const onLogin = user => setUser(user)
  const onLogout = () => setUser(null)

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
        <Login onLogin={onLogin} />
      )}
    </div>
  )
}

export default App
