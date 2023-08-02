import logo from '../../logo.svg'
import './SignUp.css'
import SignUpForm from './SignUpForm'

const SignUp = () => {
  return (
    <>
      <section className='d-flex flex-md justify-content-center signup'>
        <div className='card'>
          <img src={logo} width='70' height='70' alt='Logo' />
          <h3>Sign up</h3>
          <section className='card-body'>
            <SignUpForm />
          </section>
        </div>
      </section>
    </>
  )
}

export default SignUp
