import "./style.css";


const ButtonBlue = ({ onClick, children, descuento, texto }) => {
  return (
    <button onClick={onClick} className="button_blue">
      <div className="text_safe">
        <div className="text_title">
          <p>Descuento</p>
        </div>
        <div className="text_text">
          <p>{` ${texto}`}</p>
        </div>
      </div>
      <div className="text__num">
        <p>{`${descuento}%`}</p>
      </div>
      {children}
    </button>
  );
};

export default ButtonBlue
