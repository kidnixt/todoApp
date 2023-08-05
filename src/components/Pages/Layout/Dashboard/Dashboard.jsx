import './Dashboard.css'
import Main from './Main'
import Metrics from './Metrics/Metrics'

const Dashboard = () => {
  return (
    <>
      <Metrics/>
      <h5>TO-DO LIST</h5>
      <div className='card'>
        <div className='card-body'>
          <Main/>
        </div>
      </div>
    </>
  )
}

export default Dashboard
