import "./stylebutton.css";
import { NavLink } from 'react-router-dom';

const ButtonLittleoutline = ({ onClick, children, to }) => {
  return (
    <NavLink to={to}>
      <button onClick={onClick} className="button_little_outline">
        {children}
      </button>
    </NavLink>
  );
};

export default ButtonLittleoutline;