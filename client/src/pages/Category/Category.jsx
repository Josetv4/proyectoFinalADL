import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useEffect, useState } from "react";
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, Typography, formControlClasses } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";


import "./styles.css";
import ButtonLittle from "../../components/Buttons/buttonLittle/buttonLittle";

const arrayProducts = [
  {
    name: 'Lozartan',
    image: 'https://www.ecofarmacias.cl/wp-content/uploads/2020/03/losartan-1-1.jpg',
    description: 'Descripción del medicamento A.',
    format: '30 Comprimidos Recubiertos',
    price: 10.990,    
    valoration : 3.5,
    seller : "Petco SPA",
    id : 1
  },
  {
    name: 'Lozartan',
    image: 'https://www.ecofarmacias.cl/wp-content/uploads/2020/03/losartan-1-1.jpg',
    description: 'Descripción del medicamento A.',
    format: '30 Comprimidos Recubiertos',
    price: 10.990,
    valoration : 3.5,
    seller : "Petco SPA",
    id : 1
  },
  {
    name: 'Lozartan',
    image: 'https://www.ecofarmacias.cl/wp-content/uploads/2020/03/losartan-1-1.jpg',
    description: 'Descripción del medicamento A.',
    format: '30 Comprimidos Recubiertos',
    price: 10.990,
    valoration : 3.5,
    seller : "Petco SPA",
    id : 1
  },
  {
    name: 'Lozartan',
    image: 'https://www.ecofarmacias.cl/wp-content/uploads/2020/03/losartan-1-1.jpg',
    description: 'Descripción del medicamento A.',
    format: '30 Comprimidos Recubiertos',
    price: 10.990,
    valoration : 3.5,
    seller : "Petco SPA",
    id : 1
  },
  {
    name: 'Lozartan',
    image: 'https://www.ecofarmacias.cl/wp-content/uploads/2020/03/losartan-1-1.jpg',
    description: 'Descripción del medicamento A.',
    format: '30 Comprimidos Recubiertos',
    price: 10.990,
    valoration : 3.5,
    seller : "Petco SPA",
    id : 1
  },
  {
    name: 'Lozartan',
    image: 'https://www.ecofarmacias.cl/wp-content/uploads/2020/03/losartan-1-1.jpg',
    description: 'Descripción del medicamento A.',
    format: '30 Comprimidos Recubiertos',
    price: 10.990,
    valoration : 3.5,
    seller : "Petco SPA",
    id : 1
  },
  {
    name: 'Lozartan',
    image: 'https://www.ecofarmacias.cl/wp-content/uploads/2020/03/losartan-1-1.jpg',
    description: 'Descripción del medicamento A.',
    format: '30 Comprimidos Recubiertos',
    price: 10.990,
    valoration : 3.5,
    seller : "Petco SPA",
    id : 1
  },
];

const Category = () => {
  const { id, name } = useParams();
  //const [products,setProducts] = useState(null);
  return (
    <>
      <Grid container spacing={2} sx={{justifyContent:"space-evenly"}}>
        <Grid 
        item 
        xs={2}
        sx={{display:"flex", flexDirection:"column",alignItems:"center"}}>
          <Typography className="order-by-box" sx={{marginTop:"100px", fontSize:"25px", textAlign:"center"}}>
            Ordenar Por
          </Typography>
          <Box className="box-selects">
            <FormControl>
              <InputLabel id="first-select-label">Precio</InputLabel>
              <Select
                className="order-select"
                labelId="price-order-label"
                id="price-order"
                IconComponent={()=> (<IoIosArrowDown className="arrow-select"/>)}
              >
                <MenuItem value={'option1'}>Menor a mayor precio</MenuItem>
                <MenuItem value={'option2'}>Mayor a menor precio</MenuItem>
              </Select>
            </FormControl>
            <FormControl >
              <InputLabel id="second-select-label">Alfabéticamente</InputLabel>
              <Select 
                className="order-select"
                labelId="alfabeticamente-order-label"
                id="alfabeticamente-order"
                IconComponent={()=> (<IoIosArrowDown className="arrow-select"/>)}
              >
                <MenuItem value={'option1'}>A-Z</MenuItem>
                <MenuItem value={'option2'}>Z-A</MenuItem>
              </Select>
            </FormControl>
            <ButtonLittle >
              Filtrar
            </ButtonLittle>
          </Box>
        </Grid>
        <Grid 
          item
          xs={10}
          sx={{marginTop:"3%"}}>
          <Typography variant="h4" color="textSecondary" >
            {name}
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", marginTop: "10px", gap: "15px" }}>
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
