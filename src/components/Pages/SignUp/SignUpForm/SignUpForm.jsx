import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCities, setDptos } from '../../../../app/slices/locationSlice'
import { getCities, getDptos } from '../../../../services/crypto'
import Alert from '../../../UI/Alert'
import Button from '../../../UI/Button/Button'
import Select from '../../../UI/Select'

const SignUpForm = () => {
  const [message] = useState('')
  const [messageClass] = useState('')
  const [btnDisabled] = useState(false)
  const [btnCta] = useState('Sign up')

  const inputUserName = useRef()
  const inputPassword = useRef()

  const departamentos = useSelector(state => state.location.dptos)
  const cities = useSelector(state => state.location.cities)
  const dispatch = useDispatch()

  useEffect(() => {
    try {
      ;(async () => {
        const { departamentos } = await getDptos()
        dispatch(setDptos(departamentos))
      })()
    } catch (error) {}
  }, [dispatch])

  const _onHandleDptoChange = async id => {
    try {
      const { ciudades } = await getCities(id)
      dispatch(setCities(ciudades))
    } catch (error) {}
  }

  return (
    <>
      <form>
        {message !== '' ? (
          <Alert classColor={messageClass} message={message} />
        ) : (
          ''
        )}
        <label>Username</label>
        <br />
        <input className='form-control' type='text' ref={inputUserName} />
        <br />
        <label>Password</label>
        <br />
        <input className='form-control' type='password' ref={inputPassword} />

        <br />
        <label>Seleccionar Departamento</label>
        <Select options={departamentos} onHandleChange={_onHandleDptoChange} />
        <br />
        <label>Seleccionar Ciudad</label>
        <Select options={cities} />
        <br />
        <Button
          cta={btnCta}
          classColor={'btn-primary'}
          disabled={btnDisabled}
        />
      </form>
    </>
  )
}

export default SignUpForm
