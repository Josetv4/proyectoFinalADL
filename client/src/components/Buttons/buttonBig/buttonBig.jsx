import "./style.css";

const ButtonBig= ({ onClick, children }) => {
    return (
      <button onClick={onClick} className="button_big">
        {children}
      </button>
    );
  };
  
export default ButtonBig
