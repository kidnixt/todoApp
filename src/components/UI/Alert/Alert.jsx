const Alert = ({ message, classColor }) => {
  return (
    <div className={`alert alert-${classColor}`} role='alert'>
      {message}
    </div>
  )
}

Alert.defaultProps = {
  classColor: 'info'
}

export default Alert
