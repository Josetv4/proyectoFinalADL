import "./style.css";
import { NavLink } from 'react-router-dom';

const ButtonBig= ({ onClick, children, to }) => {
    return (
      <NavLink to={to}>
      <button onClick={onClick} className="button_big">
        {children}
      </button>
      </NavLink>
    );
  };

export default ButtonBig
