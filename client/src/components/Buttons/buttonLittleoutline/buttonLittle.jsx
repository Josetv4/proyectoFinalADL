import "./stylebutton.css";


const ButtonLittleoutline= ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="button_little">
      {children}
    </button>
  );
};

export default ButtonLittleoutline;