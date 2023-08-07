import { useRef, useState } from 'react'
import Alert from '../../../UI/Alert'
import Button from '../../../UI/Button/Button'
import { setLoginUser } from '../../../../app/slices/userSlice'
import { useDispatch } from 'react-redux'
import { useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'



const LoginForm = () => {
  const [message, setMessage] = useState('')
  const [messageClass, setClass] = useState('')
  const [btnDisabled, setDisable] = useState(false)
  const [btnCta, setBtnCTA] = useState('Iniciar sesión')

  const inputUserName = useRef()
  const inputPassword = useRef()
  const dispatch = useDispatch()
  const navigate = useNavigate()



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
        //delegamos el disparo de la accion a redux
        dispatch(setLoginUser(user));
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

  const user = useSelector(state => state.user.user)

  useEffect(() => {
    if (user) {
      navigate('/layout')
    }
  }, [user, navigate])


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
