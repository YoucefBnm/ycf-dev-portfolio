import { Link } from 'react-router-dom'
import './CustomBtn.scss'

const CustomBtn = ({ handleClick, btnStyles, btnType, text, route }) => {
  return (
    <button
        className={`cursor--pointer customBtn customBtn__${btnStyles}`}
        onClick={handleClick}
        type={btnType}
    >
        {
            route 
            ? (<Link to={route}>{text}</Link>)
            : (<span>{text}</span>)
        }
    </button>
  )
}

export default CustomBtn