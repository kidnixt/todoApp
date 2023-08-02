import { useRef, useState } from 'react'
import * as validator from '../../../../../../utils/validate'
import Button from '../../../../../UI/Button/Button'
import { useSelector } from 'react-redux'

const TodosCreateForm = ({ onAddTodo }) => {
  const user = useSelector(state => state.user.user)
  const [btnDisabled, setDisable] = useState(false)
  const inputRef = useRef()

  const _resetInputValue = () => {
    inputRef.current.value = ''
  }

  const onAddClick = e => {
    e.preventDefault()
    setDisable(true)

    const title = inputRef.current.value
    if (!validator.isEmpty(title)) {
      const rndInt = Math.floor(Math.random() * 100) + 1
      const newTodo = {
        id: rndInt,
        title: title,
        completed: false,
        userId: user.id
      }
      onAddTodo(newTodo)
      _resetInputValue()
    }
    setDisable(false)
  }
  return (
    <form className='row'>
      <div className='col'>
        <input
          type={'text'}
          className='form-control'
          id='todoInput'
          placeholder='Add todo..'
          ref={inputRef}
        />
      </div>
      <div className='col-auto'>
        <Button
          cta={'+ Add'}
          onHandleClick={onAddClick}
          disabled={btnDisabled}
        ></Button>
      </div>
    </form>
  )
}

export default TodosCreateForm
