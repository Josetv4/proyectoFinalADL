import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

import swal from "sweetalert";

import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { getAllProducts, getStatusProduct } from "../api/getApi";

import { formatDate } from '../utils/DateFormat';

const ListProducts = () => {
  const [product, setProducts] = useState([]);

  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleClick = async (id, status) => {
    try {
      const { response, error } = await getStatusProduct(id, status);

      if (error) {
        alert(error);
        await logout();
        navigate("/login");
      } else {
        swal(response.message, { icon: "success", });
      }
      fetchProducts();
    } catch (error) {
      console.error("Erro al cambiar status del producto : ", error);
    }
  };

  const fetchProducts = async () => {
    try {
      const { response } = await getAllProducts();
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
                  <TableCell align="left">Nombre</TableCell>
                  <TableCell align="left">Descripcion</TableCell>
                  <TableCell align="left">Precio</TableCell>
                  <TableCell align="left">Stock</TableCell>
                  <TableCell align="left">Categoria</TableCell>
                  <TableCell align="left">Creado</TableCell>
                  <TableCell align="left">Status</TableCell>
                  <TableCell align="left">Usuario</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {product.map((row) => (
                  <TableRow key={row.product_id}>
                    <TableCell align="right">{row.product_id}</TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.description}</TableCell>
                    <TableCell align="left">{row.price}</TableCell>
                    <TableCell align="left">{row.stock}</TableCell>
                    <TableCell align="left">{row.name_category}</TableCell>
                    <TableCell align="left">{formatDate(row.create_at)}</TableCell>
                    <TableCell align="left">
                      {row.status === "A"
                        ? "Activo"
                        : row.status === "X"
                        ? "Borrado"
                        : row.status === "P"
                        ? "Pendiente"
                        : "Desconocido"}
                    </TableCell>
                    <TableCell align="left">{row.name_user}</TableCell>
                    <TableCell align="left">
                      <IconButton
                        color="success"
                        onClick={() => handleClick(row.product_id, "A")}
                      >
                        <CheckCircleIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell align="right">
                      <IconButton
                        color="error"
                        onClick={() => handleClick(row.product_id, "X")}
                      >
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
