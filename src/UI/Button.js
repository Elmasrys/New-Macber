import './Button.css';
import { Link } from 'react-router-dom';
const Button = (props)=>{
    return (
      <>
        {props.tagType === "link" && (
          <Link
            className={`${props.className} btn`}
            onClick={props.onclick}
            to={props.to}
            id={props.id}
          >
            {props.children}
          </Link>
        )}
        {props.tagType === "button" && (
          <button
            className={`${props.className} btn`}
            onClick={props.onclick}
            type={props.type}
          >
            {props.children}
          </button>
        )}
        {props.tagType === "linkCard" && (
          <Link
            className={`${props.className} btnCard`}
            onClick={props.onclick}
            to={props.to}
            id={props.id}
          >
            {props.children}
          </Link>
        )}
      </>
    );
}
export default Button;