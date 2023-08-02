import Dashboard from './Dashboard/Dashboard'
import Header from './Dashboard/Header'
const Layout = ({
  onAddTodo,
  onComplete,
  onDeleteTodo,
  todos
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
        />
      </div>
    </div>
  )
}

export default Layout
