import TextField from '@mui/material/TextField';
import "./style.css";
const InputComponet = ({tipo, valor, placeholder}) => {
    return (
        <div>
           <TextField
           value={valor}
          label={placeholder}
          type={tipo}
          InputLabelProps={{
            shrink: true,
          }}
        />
        
      </div>
    );
  };
  
export default InputComponet
