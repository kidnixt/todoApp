import 'bootstrap-css-only'
import Layout from '../Pages/Layout/Layout'
import Login from '../Pages/Login'
import { useSelector } from 'react-redux'

const App = () => {
  //const [userLogged, setUser] = useState(null)
  const userLogged = useSelector((state) => state.user.user)

  return (
    <div className='App'>
      {userLogged ? (
        <Layout/>
      ) : (
        <Login/>
      )}
    </div>
  )
}

export default App
