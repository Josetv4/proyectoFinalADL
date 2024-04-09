import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, FormControl, Grid, MenuItem, Select, Typography, Skeleton } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";


import "./styles.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { getProductsByCategory } from "../../api/getApi";


const SearchResult = () => {
    const { id, name } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { state } = useLocation();
  useEffect(() => {
    asyncGetProducts();
  }, [state]);

  const asyncGetProducts = async () => {
    try {
      setLoading(true)
      const response = await getProductsByCategory(id);
      console.log(response);
      const fullArrayProducts = response.response.map((element) => {
        return {
          ...element,
          image_url: 'https://www.laboratoriochile.cl/wp-content/uploads/2015/11/Paracetamol_500MG_16C_BE_HD.jpg',
          format: '30 Comprimidos Recubiertos',
          valoration: Math.round((Math.random() * 5) * 10) / 10,
          seller: "Petco SPA"
        }
      })
      //setProducts(response.response)
      console.log("loading:", loading)
      setProducts(fullArrayProducts)
      setLoading(false)

    } catch (error) {
      console.log(error);
    }
  }

  return (

       <Grid container spacing={1} sx={{ display: "flex", flexDirection: "column", alignContent: "center", marginTop: "10px" }}>
        <Grid
          item
          xs={10}
          sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h4" color="textSecondary" >
            {name}
          </Typography>
          <Box>
            <FormControl>
              <Select
                className="order-select"
                IconComponent={() => (<IoIosArrowDown className="arrow-select" />)}
                // onChange={}
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

          {loading ?
            (
              <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", marginTop: "10px", gap: "15px" }}>
                <Box>
                  <Skeleton variant="rounded" width={300} height={150} />
                  <Skeleton />
                  <Skeleton width={150} />
                </Box>
                <Box>
                  <Skeleton variant="rounded" width={300} height={150} />
                  <Skeleton />
                  <Skeleton width={150} />
                </Box>
                <Box>
                  <Skeleton variant="rounded" width={300} height={150} />
                  <Skeleton />
                  <Skeleton width={150} />
                </Box>
                <Box>
                  <Skeleton variant="rounded" width={300} height={150} />
                  <Skeleton />
                  <Skeleton width={150} />
                </Box>
                <Box>
                  <Skeleton variant="rounded" width={300} height={150} />
                  <Skeleton />
                  <Skeleton width={150} />
                </Box>
                <Box>
                  <Skeleton variant="rounded" width={300} height={150} />
                  <Skeleton />
                  <Skeleton width={150} />
                </Box>
                <Box>
                  <Skeleton variant="rounded" width={300} height={150} />
                  <Skeleton />
                  <Skeleton width={150} />
                </Box>
              </Box>
            ) :
            (products.length > 0
              ?
              <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", marginTop: "10px", gap: "15px" }}>
                {products.map((product, i) =>
                  <ProductCard key={i} product={product} />
                )}
              </Box>
              :
              <Box>
                <Typography variant="bold" color="textPrimary" sx={{ textAlign: "center" }} >
                  No hay productos para la categoría {name}
                </Typography>
              </Box>
            )
          }

        </Grid>
      </Grid>
  
  )
}

export default SearchResult
