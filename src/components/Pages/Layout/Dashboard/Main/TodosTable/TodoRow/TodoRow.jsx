import { useDispatch } from 'react-redux'
import Button from '../../../../../../UI/Button/Button'
import { completeTodo, deleteTodo } from '../../../../../../../app/slices/todosSlice'



const TableItemRow = ({todo}) => {

  const dispatch = useDispatch()

  const onHandleDelete = () => {
    dispatch(deleteTodo(todo.id))
  }

  const onHandleComplete = () => {
    dispatch(completeTodo(todo.id))
  }
  return (
    <tr className={todo.completed ? 'strike' : ''}>
      <th scope='row'>{todo.id}</th>
      <td>{todo.completed ? <strike>{todo.title}</strike> : todo.title}</td>
      <td>
        <input
          type='checkbox'
          checked={todo.completed}
          onChange={onHandleComplete}
        />
      </td>
      <td>
        <Button
          cta={'Delete'}
          classColor='btn-danger'
          onHandleClick={onHandleDelete}
        />
      </td>
    </tr>
  )
}

export default TableItemRow
