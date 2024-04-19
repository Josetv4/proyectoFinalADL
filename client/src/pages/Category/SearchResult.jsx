import {  useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Box, FormControl, Grid, MenuItem, Select, Typography, Skeleton } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";


import "./styles.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import {getProductDescription, getFavoritesbyUser } from "../../api/getApi";
import AuthContext from "../../context/AuthContext";


const SearchResult = () => {
    const { name } = useParams();
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userId } = useContext(AuthContext);

  useEffect(() => {
    asyncGetProducts(name); 
    asyncGetFavoritesUser();
  }, []);

  const asyncGetProducts = async (name) => { 
    try {
      setLoading(true);
      const { response, error } = await getProductDescription(name); 
      if (error) {
        console.error(error);
        return;
      }
      console.log(JSON.stringify(response));
      setProducts(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const asyncGetFavoritesUser = async () => {
    if (userId) {
      try {
        setLoading(true)
        const response = await getFavoritesbyUser(userId);
        console.log(response);
        setFavorites(response.response)
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    }
  }

  const searchFavoritebyProduct = (productId) =>{
    return {
      isFavorite : userId ? favorites.some(element => element.product_id === productId) : false,
      favorite_id : userId ? favorites.find(element =>element.product_id === productId)?.favorites_id : null
    };
  }

  const handleChangeOrder = (event) => {
    //Ordenar
    const order = event.target.value;
    const newOrder = [...products];
    if (order === 1) {
      newOrder.sort((a, b) => a.price - b.price);
    } else if (order === 2) {
      newOrder.sort((a, b) => b.price - a.price);
    }
    else if (order === 3) {
      newOrder.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    }
    else if (order === 4) {
      newOrder.sort((a, b) => {
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
    console.log("products: ", products)
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
            (products?.length > 0
              ?
              <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", marginTop: "10px", gap: "15px" }}>
                {products.map((product, i) =>
                  <ProductCard key={i} product={product} favorite={searchFavoritebyProduct(product.product_id)} />
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
