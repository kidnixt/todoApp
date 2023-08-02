import Dashboard from './Dashboard/Dashboard'
import Header from './Dashboard/Header'
const Layout = ({
  onAddTodo,
  onComplete,
  onDeleteTodo,
  todos,
  user
}) => {
  return (
    <div className='container-fluid dashboard'>
      <Header />
      <div className='col-9 mx-auto'>
        <Dashboard
          onAddTodo={onAddTodo}
          onComplete={onComplete}
          onDeleteTodo={onDeleteTodo}
          todos={todos}
          user={user}
        />
      </div>
    </div>
  )
}

export default Layout
