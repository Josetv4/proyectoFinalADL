import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

import { getProducts, getStatusUser } from "../api/getApi";

const ListProducts = () => {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleClick = async (id, status) => {


    switch (status) {
      case 'X':
          await getStatusUser(id, status)
        break;
      default:
        await getStatusUser(id, status)
        break;
    }
      };
  
  const fetchProducts = async () => {
    try {
      const { response } = await getProducts();
      setProducts(response.product);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    }
  };

  return (
    <>
     <main>
      <h2>Activar-Desactivar Productos</h2>  
      <Container>
        
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Nombre</TableCell>
                <TableCell align="right">Descripcion</TableCell>
                <TableCell align="right">Precio</TableCell>
                <TableCell align="right">Stock</TableCell>
                <TableCell align="right">Categoria</TableCell>
                <TableCell align="right">Creado</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Usuario</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {product.map((row) => (
                <TableRow
                  key={row.product_id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">{ row.product_id }</TableCell>
                  <TableCell align="right">{ row.name }</TableCell>
                  <TableCell align="right">{ row.description }</TableCell>
                  <TableCell align="right">{ row.price }</TableCell>
                  <TableCell align="right">{ row.stock }</TableCell>
                  <TableCell align="right">{ row.name_category }</TableCell>
                  <TableCell align="right">{ row.create_at }</TableCell>
                  <TableCell align="right">{ row.status === 'A' ? 'Activo' : row.status === 'X' ? 'Borrado' : row.status === 'P' ? 'Pendiente' : 'Desconocido' }</TableCell>
                  <TableCell align="right">{ row.name_user }</TableCell>
                  <TableCell align="right">
                  <IconButton color="success" onClick={() => handleClick(row.user_id,'A')}>
                    <CheckIcon />
                  </IconButton>
                  </TableCell>
                  <TableCell align="right">
                  <IconButton color="error" onClick={() => handleClick(row.user_id,'X')}>
                    <DeleteIcon />
                  </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      </main>
    </>
  );
};

export default ListProducts;
