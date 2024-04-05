import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, FormControl, Grid, MenuItem, Select, Typography } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";


import "./styles.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { getProductsByCategory } from "../../api/getApi";

const Category = () => {
  const { id, name } = useParams();
  const [products,setProducts] = useState([]);

  const { state } = useLocation();

  useEffect(()=>{
    asyncGetProducts();
  },[state]);

  const asyncGetProducts = async() =>{
    try {
      const response = await getProductsByCategory(id);
      console.log(response)
      setProducts(response.response)
    } catch (error) {
      console.log(error);
    }
  }

  const handleChangeOrder = (event) =>{
    //Ordenar
    const order = event.target.value;
    const newOrder = [...products];
    if(order === 1){
      newOrder.sort((a,b) =>a.price - b.price);
    }else if(order === 2){
      newOrder.sort((a,b) =>b.price - a.price);
    }
    else if(order === 3){
      newOrder.sort((a,b) =>{
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    }
    else if(order === 4){
      newOrder.sort((a,b) =>{
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
        return 0;
      });
    }
    
    setProducts(newOrder)
    console.log("products: ",products)
  }

  return (
    <>
      <Grid container spacing={1} sx={{display:"flex", flexDirection:"column", alignContent:"center", marginTop:"10px"}}>
        <Grid 
        item 
        xs={10}
        sx={{display:"flex", justifyContent:"space-between"}}>
          <Typography variant="h4" color="textSecondary" >
            {name}
          </Typography>
          <Box>
            <FormControl>
              <Select
                className="order-select"
                IconComponent={()=> (<IoIosArrowDown className="arrow-select"/>)}
                onChange={handleChangeOrder}                
                defaultValue={0}
              >
                <MenuItem value={0}>Ordenar por</MenuItem>
                <MenuItem value={1}>Menor a mayor precio</MenuItem>
                <MenuItem value={2}>Mayor a menor precio</MenuItem>
                <MenuItem value={3}>A-Z</MenuItem>
                <MenuItem value={4}>Z-A</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid 
          item
          xs={12}
        >
          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", marginTop: "10px", gap: "15px" }}>
            {products.length > 0 ? 
            
            products.map((product, i) =>
              <ProductCard key={i} product={product} />
            )
          :          
            <Typography variant="bold" color="textPrimary" sx={{textAlign:"center"}} >
              No hay productos para la categoría {name}
            </Typography>
          }
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default Category;
