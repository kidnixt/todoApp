import 'bootstrap-css-only'
import Login from '../Pages/Login'
import { Routes, Route} from 'react-router-dom'
import PrivateRoute from '../Pages/Layout/Dashboard/PrivateRoute/PrivateRoute'
import SignUp from '../Pages/SignUp/SignUp'
import Layout from '../Pages/Layout/Layout'

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path = '/' element= {<Login/>}/>
        <Route path = '/login' element= {<Login/>}/>
        <Route path = '/signup' element= {<SignUp/>}/>

        <Route
          path = '/layout'
          element = {<PrivateRoute><Layout/></PrivateRoute>}
        />

  

      </Routes>
    </div>
  )
}

export default App
