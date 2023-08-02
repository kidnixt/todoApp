import { useRef, useState } from 'react'
import Alert from '../../../UI/Alert'
import Button from '../../../UI/Button/Button'

const LoginForm = ({ onLogin }) => {
  const [message, setMessage] = useState('')
  const [messageClass, setClass] = useState('')
  const [btnDisabled, setDisable] = useState(false)
  const [btnCta, setBtnCTA] = useState('Iniciar sesión')

  const inputUserName = useRef()
  const inputPassword = useRef()

  const isNotEmpty = val => val.length > 0

  const onHandleLogin = async e => {
    e.preventDefault()

    const userName = inputUserName.current.value
    const password = inputPassword.current.value

    setDisable(true)
    setBtnCTA('Sending...')

    if (isNotEmpty(userName) && isNotEmpty(password)) {
      const rndInt = Math.floor(Math.random() * 100) + 1
      const user = { userName: userName, id: rndInt }

      setTimeout(() => {
        setBtnCTA('Iniciar sesión')
        setClass('success')
        setMessage('Inicio de sesión correcto')
        onLogin(user)
      }, 1000)
    } else {
      setDisable(false)
      setBtnCTA('Iniciar sesión')
      setClass('danger')
      setMessage('Por favor complete todos los campos')

      _resetForm()
    }
  }

  const _resetForm = () => {
    setTimeout(() => {
      setClass('')
      setMessage('')
    }, 3000)
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
        <br />
        <Button
          cta={btnCta}
          classColor={'btn-primary'}
          onHandleClick={onHandleLogin}
          disabled={btnDisabled}
        />
      </form>
    </>
  )
}

export default LoginForm
