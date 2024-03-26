import "./style.css";
import { NavLink } from 'react-router-dom';

const ButtonOutline = ({ onClick, children, to }) => {
  return (
    <NavLink to={to}>
      <button onClick={onClick} className="button_outline">
        {children}
      </button>
    </NavLink>
  );
};

export default ButtonOutline
