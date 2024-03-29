

const InputComponet = ({ component}) => {
    const { label, name, type, value, placeholder, onChangeFunction } = component;

    return (
        <div>
        <label htmlFor={name}>{label}</label>
        <input 
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChangeFunction(e.target.value)}
        />
      </div>
    );
  };
  
export default InputComponet
