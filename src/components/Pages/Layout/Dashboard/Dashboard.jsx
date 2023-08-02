import './Dashboard.css'
import Main from './Main'
import Metrics from './Metrics/Metrics'

const Dashboard = ({ onAddTodo, onComplete, onDeleteTodo, todos, user }) => {
  return (
    <>
      <Metrics todos={todos} />
      <h5>TO-DO LIST</h5>
      <div className='card'>
        <div className='card-body'>
          <Main
            onAddTodo={onAddTodo}
            onComplete={onComplete}
            onDeleteTodo={onDeleteTodo}
            user={user}
            todos={todos}
          />
        </div>
      </div>
    </>
  )
}

export default Dashboard
