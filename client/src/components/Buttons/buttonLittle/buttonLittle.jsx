import "./stylebutton.css";


const ButtonLittle= ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="button_little">
      {children}
    </button>
  );
};

export default ButtonLittle;