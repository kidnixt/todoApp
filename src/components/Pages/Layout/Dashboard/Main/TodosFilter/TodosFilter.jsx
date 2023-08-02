import { useRef } from 'react'

const TodosFilter = ({ onFilter }) => {
  const selectRef = useRef()

  const onSelectChange = () => {
    onFilter(Number(selectRef.current.value))
  }
  return (
    <>
      <div className='input-group'>
        <select
          className='form-control'
          onChange={onSelectChange}
          ref={selectRef}
        >
          <option value={0}>No completados</option>
          <option value={1}>Completados</option>
          <option selected value={2}>
            Todos
          </option>
        </select>
      </div>
    </>
  )
}
TodosFilter.defaultProps = {
  onFilter: () => {
    console.log('Filtrando')
  }
}
export default TodosFilter
