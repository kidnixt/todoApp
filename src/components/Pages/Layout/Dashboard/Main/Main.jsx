import Alert from '../../../../UI/Alert'
import CreateForm from './TodosCreateForm'
import TodosTable from './TodosTable'

const Main = ({ onAddTodo, onComplete, onDeleteTodo, user, todos }) => {
  return (
    <main>
      <div className='grid'>
        <div className='g-col-6'>
          <CreateForm onAddTodo={onAddTodo} user={user} />
        </div>
        <br />
        <div className='g-col-6'>
          {todos.length > 0 ? (
            <TodosTable
              todos={todos}
              onComplete={onComplete}
              onDeleteTodo={onDeleteTodo}
            />
          ) : (
            <Alert
              classColor={'dark'}
              message={'Parece que no tienes tareas creadas'}
            />
          )}
        </div>
      </div>
    </main>
  )
}

export default Main
