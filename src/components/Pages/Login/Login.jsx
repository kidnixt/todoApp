import logo from '../../logo.svg'
import './Login.css'
import LoginForm from './LoginForm'

const Login = ({ onLogin }) => {
  return (
    <>
      <section className='d-flex flex-md justify-content-center login'>
        <div className='card'>
          <img src={logo} width='70' height='70' alt='Logo' />
          <h3>ToDo App</h3>
          <section className='card-body'>
            <LoginForm onLogin={onLogin} />
          </section>
        </div>
      </section>
    </>
  )
}

export default Login
