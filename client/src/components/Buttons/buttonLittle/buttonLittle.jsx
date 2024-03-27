import "./stylebutton.css";
import { NavLink } from 'react-router-dom';

const ButtonLittle = ({ onClick, children, to }) => {
  return (
    <NavLink to={to}>
      <button onClick={onClick} className="button_little">
        {children}
      </button>
    </NavLink>
  );
};

export default ButtonLittle;