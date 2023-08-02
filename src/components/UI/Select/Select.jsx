import { useRef } from 'react'

const Select = ({ options, onHandleChange }) => {
  const selectRef = useRef()

  const _onHandleChange = () => {
    const idSelected = selectRef.current.value
    onHandleChange(idSelected)
  }

  return (
    <select className='form-control' onChange={_onHandleChange} ref={selectRef}>
      <option selected value='0'>
        Seleccione una opción
      </option>
      {options.map(option => (
        <option key={option.id} value={option.id}>
          {option.nombre}
        </option>
      ))}
    </select>
  )
}

Select.defaultProps = {
  options: [],
  onHandleChange: () => {}
}
export default Select
