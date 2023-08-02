import './Metrics.css'
const Metrics = ({ todos }) => {
  const _calculateCompleted = () => {
    return todos.filter(todo => todo.completed).length
  }

  const _calculateIncomplete = () => {
    return todos.filter(todo => !todo.completed).length
  }
  return (
    <div className='container metrics'>
      <div className='row'>
        <div className='col-sm'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>TOTAL</h5>
              <p className='card-text'>
                <span className='badge bg-secondary'>
                  {todos ? todos.length : 0}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className='col-sm'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>COMPLETED</h5>
              <p className='card-text'>
                <span className='badge bg-success'>
                  {_calculateCompleted()}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className='col-sm'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>INCOMPLETED</h5>
              <p className='card-text'>
                <span className='badge bg-danger'>
                  {_calculateIncomplete()}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Metrics
