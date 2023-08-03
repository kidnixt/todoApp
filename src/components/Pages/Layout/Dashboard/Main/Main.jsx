import Alert from '../../../../UI/Alert'
import CreateForm from './TodosCreateForm'
import TodosTable from './TodosTable'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const Main = () => {
  const todos = useSelector(state => state.todos.todos)

  return (
    <main>
      <div className='grid'>
        <div className='g-col-6'>
          <CreateForm />
        </div>
        <br />
        <div className='g-col-6'>
          {todos.length > 0 ? (
            <TodosTable
              todos={todos}
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
