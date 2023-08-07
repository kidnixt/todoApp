import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
