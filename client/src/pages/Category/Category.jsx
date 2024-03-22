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
];

const Category = () => {
  const { id, name } = useParams();
  //const [products,setProducts] = useState(null);
  return (
    <>
      <Typography variant="h3" color="textSecondary" >
        {name}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={2} >
          <Box sx={{ minWidth: 120, display: "flex", flexDirection: "column",border: "solid 1px", marginTop:"40px"}}>
            <FormControl className="order-select">
              <InputLabel id="first-select-label">First Select</InputLabel>
              <Select
                labelId="first-select-label"
                id="first-select"
              >
                <MenuItem value={'option1'}>Option 1</MenuItem>
                <MenuItem value={'option2'}>Option 2</MenuItem>
                <MenuItem value={'option3'}>Option 3</MenuItem>
              </Select>
            </FormControl>
            <FormControl className="order-select">
              <InputLabel id="second-select-label">Second Select</InputLabel>
              <Select
                labelId="second-select-label"
                id="second-select"

              >
                <MenuItem value={'option1'}>Option 1</MenuItem>
                <MenuItem value={'option2'}>Option 2</MenuItem>
                <MenuItem value={'option3'}>Option 3</MenuItem>
              </Select>
            </FormControl>
            <FormControl className="order-select">
              <InputLabel id="third-select-label">Third Select</InputLabel>
              <Select
                labelId="third-select-label"
                id="third-select"
              >
                <MenuItem value={'option1'}>Option 1</MenuItem>
                <MenuItem value={'option2'}>Option 2</MenuItem>
                <MenuItem value={'option3'}>Option 3</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", marginTop: "40px" }}>
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
