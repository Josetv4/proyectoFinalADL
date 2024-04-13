import { useState } from "react";

import Box from "@mui/material/Box";
import ButtonBig from "../../../components/Buttons/buttonBig/buttonBig";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";

import CategoryData from "../../../components/json/CategoryData.json";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import { FaRegImage } from "react-icons/fa6";
import { Button, Container } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import "./style.css";
import TextField from "@mui/material/TextField";

import CircularProgress from '@mui/material/CircularProgress';



const Publications = () => {
  const CategoryDataArray = Object.values(CategoryData);

  const [productname, setProductname] = useState("");
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [detailname, setDetailname] = "";
  const [category, setCategory] = useState([]);
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const [loading, setLoading] = useState(false);

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCategory(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLoading(true);
      // Simular una carga de imagen (aquí puedes llamar a tu función de carga real de imagen)
      setTimeout(() => {
        setImage(file);
        setImageName(file.name);
        setLoading(false);
      }, 2000); // Simulación de tiempo de carga
    }
  };

  return (
    <div className="publication">
      <h1>Publica tus productos</h1>
      <form onSubmit={handleSubmit}>
        <Container
         
        >
          <Box
           sx={{
            display: "grid",
            columnGap: 4,
            rowGap: 6,
            gridTemplateColumns: "repeat(3, 2fr)",
            justifyItems: "center",
            height: "100%",
            margin: "2%",
            alignItems: "center",
          }}>
          <div className="input_publication">

            <TextField
              required
              id="filled"
              label="Nombre del producto"
              defaultValue="ejemplo, lozartan"
              variant="filled"
            
              value={productname}
              onChange={(e) => setProductname(e.target.value)}
            />
          </div>

          <div  className="input_publication">
            <TextField
              required
              id="filled"
              label="Valor por unidad"
              defaultValue="Valor por unidad"
              variant="filled"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="input_publication">
            <TextField
              required
              id="filled-required"
              label="Cantidad en sctock"
              defaultValue="Cantidad en stock"
              variant="filled"
              type="number"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>

          <div className="input_publication">
            <TextField
              id="outlined-multiline-static"
              label="Nombre detallado"
              multiline
              variant="filled"
              rows={4}
              defaultValue="ejemplo, Losartan (B) 50mg 30 Comprimidos Recubiertos"
              onChange={(e) => setDetailname(e.target.value)}
              value={detailname}
            />
          </div>

          <div className="input_publication">
            <TextField
              id="outlined-multiline-static"
              label="Detalles de producto"
              multiline
              variant="filled"
              rows={4}
              defaultValue="ejemplo, medicamento para personas hipertensas"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          </div >

        
            <div className="publication_category">
              <label htmlFor="category">
                Seleciona una o más categorías a las que pertenece tu producto
              </label>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
         
                variant="filled"
                value={category}
                onChange={handleChange}
                input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(", ")}
              >
                {CategoryDataArray.map((item) => (
  <MenuItem key={item.id} value={item.nombre}>
    <ListItemText primary={item.nombre} />
  </MenuItem>
))}

              </Select>
            </div>
            <div className="publication_button">
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >

                Sube la imagen de tu producto aquí <FaRegImage />
                 <VisuallyHiddenInput
                id="upload-button"
                type="file"
                onChange={handleImageChange}
              />
              </Button>
            </div>
            {loading && (
              <div className="publication_button">
                <CircularProgress />
              </div>
            )}
            {/* Mostrar el nombre de la imagen cuando se haya cargado */}
            {imageName && !loading && (
              <div className="publication_button">
                <p>{imageName}</p>
              </div>
            )}
          </Box>
          <Box
          sx={{
            display: "grid",
            columnGap: 4,
            rowGap: 3,
            gridTemplateColumns: "repeat(1, 1fr)",
            justifyItems: "end",
            height: "100%",
            margin: "2%",
            alignItems: "center",
          }}>
             <ButtonBig type="submit" variant="outlined">Publicar</ButtonBig>
             </Box>
         
        </Container>
      </form>
    </div>
  );
};

export default Publications;
