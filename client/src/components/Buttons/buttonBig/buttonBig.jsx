import "./style.css";
import { NavLink } from 'react-router-dom';

const ButtonBig= ({ onClick, children, to, type="button" }) => {

    if (to) {
      return (
        <NavLink to={to}>
          <button type={type} onClick={onClick} className="button_big">
            {children}
          </button>
        </NavLink>
      );
    }else {
      return (
      <button type={type} onClick={onClick} className="button_big">
        {children}
      </button>)
    }

  };

export default ButtonBig
