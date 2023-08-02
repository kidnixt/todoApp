import './Table.css'
import TableItemRow from './TodoRow'

const TodosTable = ({ todos, onDeleteTodo, onComplete }) => {
  return (
    <table className='table table-hover'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Title</th>
          <th scope='col'>Completed</th>
          <th scope='col'></th>
        </tr>
      </thead>
      <tbody>
        {todos.map(todo => (
          <TableItemRow
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onComplete={onComplete}
          />
        ))}
      </tbody>
    </table>
  )
}
export default TodosTable
