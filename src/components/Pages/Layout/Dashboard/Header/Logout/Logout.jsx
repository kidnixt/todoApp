import { useDispatch } from "react-redux"
import { setLogoutUser } from '../../../../../../app/slices/userSlice'

const Logout = () => {

  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(setLogoutUser())
  }

  const handleLogout = () => {
    onLogout()
  }
    
  return (
    <form className='form-inline my-2 my-lg-0'>
      <button
        onClick={handleLogout}
        className='btn btn-outline-success my-2 my-sm-0'
        type='submit'
      >
        Logout
      </button>
    </form>
  )
}

export default Logout
