import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import { useEffect, useState } from "react";
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, Typography, formControlClasses } from "@mui/material";

import "./styles.css";

const arrayProducts = [
  {
    name: 'Medicamento A',
    image: 'url_de_la_imagen_aqui',
    description: 'Descripción del medicamento A.',
    format: 'formato de presentaciholaón',
    price: 10.990,
  },
  {
    name: 'Medicamento A',
    image: 'url_de_la_imagen_aqui',
    description: 'Descripción del medicamento A.',
    format: 'formato de presentaciholaón',
    price: 10.990,
  },
  {
    name: 'Medicamento A',
    image: 'url_de_la_imagen_aqui',
    description: 'Descripción del medicamento A.',
    format: 'formato de presentaciholaón',
    price: 10.990,
  },
  {
    name: 'Medicamento A',
    image: 'url_de_la_imagen_aqui',
    description: 'Descripción del medicamento A.',
    format: 'formato de presentaciholaón',
    price: 10.990,
  },
  {
    name: 'Medicamento A',
    image: 'url_de_la_imagen_aqui',
    description: 'Descripción del medicamento A.',
    format: 'formato de presentaciholaón',
    price: 10.990,
  },
  {
    name: 'Medicamento A',
    image: 'url_de_la_imagen_aqui',
    description: 'Descripción del medicamento A.',
    format: 'formato de presentaciholaón',
    price: 10.990,
  },
  {
    name: 'Medicamento A',
    image: 'url_de_la_imagen_aqui',
    description: 'Descripción del medicamento A.',
    format: 'formato de presentaciholaón',
    price: 10.990,
  },
];

const Category = () => {
  const { id, name } = useParams();
  //const [products,setProducts] = useState(null);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={2} >
          <Typography variant="h5" color="textSecondary" >
            Ordenar Por
          </Typography>
          <Box className="box-selects">
            <FormControl className="order-select">
              <InputLabel id="first-select-label">Precio</InputLabel>
              <Select
                labelId="price-order-label"
                id="price-order"
              >
                <MenuItem value={'option1'}>Option 1</MenuItem>
                <MenuItem value={'option2'}>Option 2</MenuItem>
                <MenuItem value={'option3'}>Option 3</MenuItem>
              </Select>
            </FormControl>
            <FormControl className="order-select">
              <InputLabel id="second-select-label">Alfabéticamente</InputLabel>
              <Select
                labelId="alfabeticamente-order-label"
                id="alfabeticamente-order"

              >
                <MenuItem value={'option1'}>Option 1</MenuItem>
                <MenuItem value={'option2'}>Option 2</MenuItem>
                <MenuItem value={'option3'}>Option 3</MenuItem>
              </Select>
            </FormControl>
            <FormControl className="order-select">
              <InputLabel id="third-select-label">Ubicación</InputLabel>
              <Select
                labelId="ubication-order-label"
                id="ubication-order"
              >
                <MenuItem value={'option1'}>Option 1</MenuItem>
                <MenuItem value={'option2'}>Option 2</MenuItem>
                <MenuItem value={'option3'}>Option 3</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="h4" color="textSecondary" >
            {name}
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", marginTop: "10px" }}>
            {arrayProducts.map((product, i) =>
              <ProductCard key={i} product={product} />
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default Category;
