import 'bootstrap-css-only'
import Layout from '../Pages/Layout/Layout'
import Login from '../Pages/Login'
import { useSelector } from 'react-redux'
import { Routes, Route} from 'react-router-dom'

const App = () => {
  //const [userLogged, setUser] = useState(null)
  const userLogged = useSelector((state) => state.user.user)

  return (
    <div className='App'>
      <Routes>
        <Route path = '/' element= {<Login/>}/>
        <Route path = '/login' element= {<Login/>}/>



        <Route/>

      </Routes>
    </div>
  )
}

export default App
