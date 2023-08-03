import Dashboard from './Dashboard/Dashboard'
import Header from './Dashboard/Header'
const Layout = ({}) => {
  return (
    <div className='container-fluid dashboard'>
      <Header />
      <div className='col-9 mx-auto'>
        <Dashboard/>
      </div>
    </div>
  )
}

export default Layout
