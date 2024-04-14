import { useContext, useEffect, useState } from "react";

import Box from "@mui/material/Box";
import ButtonBig from "../../../components/Buttons/buttonBig/buttonBig";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import { FaRegImage } from "react-icons/fa6";
import { Button, Container } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import "./style.css";
import TextField from "@mui/material/TextField";
import { createNewProduct, getCategories } from "../../../api/getApi";
import { AuthContext } from "../../../context/AuthContext";
import swal from 'sweetalert';
import CircularProgress from '@mui/material/CircularProgress';

const Publications = () => {

  const { userId } = useContext(AuthContext);
  const [productname, setProductname] = useState("");
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [detailname, setDetailname] = useState("");
  const [category, setCategory] = useState("");
  const [categories,setCategories] = useState([]);
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    asyncGetCategories();
  },[]);

  const asyncGetCategories = async()=>{
    try {
      const response = await getCategories();
      setCategories(response.response.category)
    } catch (error) {
      console.log(error)
    }
  }

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

  const handleSubmit =  async(e) => {
    e.preventDefault();
    const data = {
      nameProducts : productname,
      description : details,
      price,
      stock,
      category_id : category,
      statusProduct : "P",
      user_id : userId,
      information : detailname
    }
    try {
      const response = await createNewProduct(data);
      console.log(response);
      if (response.statusCode === 201) {
        swal("¡Registro exitoso!", "Tu producto se ha publicado correctamente.", "success");
        cleanFields();
      } else {
        swal("¡Error!", "Ha ocurrido un error al publicar tu producto", "error");
      }
    } catch (error) {
      console.log(error);
      swal("¡Error!", "Ha ocurrido un error al publicar tu producto", "error");
    }
    
    
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

  const cleanFields = () => {
    setProductname("");
    setDetails("");
    setPrice("");
    setStock("");
    setDetailname("");
    setCategory("");
  }



  return (
    <div className="publication">
      <h1>Publica tus productos</h1>
      <form onSubmit={handleSubmit } encType ="multipart/form-data">
        <Container>
          <Box
           sx={{
            display: "grid",
            columnGap: 4,
            rowGap: 3,
            gridTemplateColumns: "repeat(3, 2fr)",
            justifyItems: "center",
            height: "100%",
            margin: "2%",
            alignItems: "center",
          }}>
          <div>

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

          <div>
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
          <div>
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

          <div>
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

          <div>
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
          </div>

        
            <div className="publication_category">
              <label htmlFor="category">
                Seleciona una categoría para tu producto
              </label>
              <Select
                variant="filled"
                value={category}
                onChange={handleChange}
                input={<OutlinedInput label="Tag" />}
                defaultValue={""}
              >
                {categories?.map((item) => (
                  <MenuItem key={item.category_id} value={item.category_id}>
                    <ListItemText primary={item.name} />
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
                value={image}
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