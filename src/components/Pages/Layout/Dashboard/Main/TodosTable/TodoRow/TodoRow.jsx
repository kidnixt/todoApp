import Button from '../../../../../../UI/Button/Button'

const TodoRow = ({ todo, onComplete, onDeleteTodo }) => {
  const onHandleDelete = () => {
    onDeleteTodo(todo.id)
  }

  const onHandleComplete = () => {
    onComplete(todo.id)
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

export default TodoRow
