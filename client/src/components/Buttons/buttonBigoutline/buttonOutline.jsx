import "./style.css";

const ButtonOutline= ({ onClick, children }) => {
    return (
      <button onClick={onClick} className="button_outline">
        {children}
      </button>
    );
  };
  
export default ButtonOutline
