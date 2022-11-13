import './ErrorMessage.css'

function ErrorMessage( props: {error: string} ) {
  return (
    <div className='errorBox'>{props.error}</div>
  )
}

export default ErrorMessage