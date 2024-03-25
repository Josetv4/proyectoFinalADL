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
    seller : "Petco SPA"
  },
  {
    name: 'Lozartan',
    image: 'https://www.ecofarmacias.cl/wp-content/uploads/2020/03/losartan-1-1.jpg',
    description: 'Descripción del medicamento A.',
    format: '30 Comprimidos Recubiertos',
    price: 10.990,
    valoration : 3.5,
    seller : "Petco SPA"
  },
  {
    name: 'Lozartan',
    image: 'https://www.ecofarmacias.cl/wp-content/uploads/2020/03/losartan-1-1.jpg',
    description: 'Descripción del medicamento A.',
    format: '30 Comprimidos Recubiertos',
    price: 10.990,
    valoration : 3.5,
    seller : "Petco SPA"
  },
  {
    name: 'Lozartan',
    image: 'https://www.ecofarmacias.cl/wp-content/uploads/2020/03/losartan-1-1.jpg',
    description: 'Descripción del medicamento A.',
    format: '30 Comprimidos Recubiertos',
    price: 10.990,
    valoration : 3.5,
    seller : "Petco SPA"
  },
  {
    name: 'Lozartan',
    image: 'https://www.ecofarmacias.cl/wp-content/uploads/2020/03/losartan-1-1.jpg',
    description: 'Descripción del medicamento A.',
    format: '30 Comprimidos Recubiertos',
    price: 10.990,
    valoration : 3.5,
    seller : "Petco SPA"
  },
  {
    name: 'Lozartan',
    image: 'https://www.ecofarmacias.cl/wp-content/uploads/2020/03/losartan-1-1.jpg',
    description: 'Descripción del medicamento A.',
    format: '30 Comprimidos Recubiertos',
    price: 10.990,
    valoration : 3.5,
    seller : "Petco SPA"
  },
  {
    name: 'Lozartan',
    image: 'https://www.ecofarmacias.cl/wp-content/uploads/2020/03/losartan-1-1.jpg',
    description: 'Descripción del medicamento A.',
    format: '30 Comprimidos Recubiertos',
    price: 10.990,
    valoration : 3.5,
    seller : "Petco SPA"
  },
];

const Category = () => {
  const { id, name } = useParams();
  //const [products,setProducts] = useState(null);
  return (
      <Grid container spacing={2}>
        <Grid item xs={2} sx={{marginTop:"7%"}}>
          <Typography className="order-by-box">
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
                <MenuItem value={'option1'}>Option 1</MenuItem>
                <MenuItem value={'option2'}>Option 2</MenuItem>
                <MenuItem value={'option3'}>Option 3</MenuItem>
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
                <MenuItem value={'option1'}>Option 1</MenuItem>
                <MenuItem value={'option2'}>Option 2</MenuItem>
                <MenuItem value={'option3'}>Option 3</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel id="third-select-label">Ubicación</InputLabel>
              <Select
                className="order-select"
                labelId="ubication-order-label"
                id="ubication-order"
                IconComponent={()=> (<IoIosArrowDown className="arrow-select"/>)}
              >
                <MenuItem value={'option1'}>Option 1</MenuItem>
                <MenuItem value={'option2'}>Option 2</MenuItem>
                <MenuItem value={'option3'}>Option 3</MenuItem>
              </Select>
            </FormControl>
            <ButtonLittle >
              Filtrar
            </ButtonLittle>
          </Box>
        </Grid>
        <Grid item xs={10} sx={{marginTop:"3%"}}>
          <Typography variant="h4" color="textSecondary" >
            {name}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: "wrap" }}>
            {arrayProducts.map((product, i) =>
              <ProductCard key={i} product={product} />
            )}
          </Box>
        </Grid>
      </Grid>
  );
};
export default Category;
