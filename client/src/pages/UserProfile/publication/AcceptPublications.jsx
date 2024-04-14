import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../../context/AuthContext";

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
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { getAllProducts, getStatusProduct } from "../../../api/getApi";

const AcceptPublications = () => {
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
          swal(error, { icon: "success", });
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
  
    const filterProduct = product.filter(item => item.status === 'P');
  
    return (
      <>
        <main>
          <h2>Aceptar Publicaciones</h2>
          <Container>
        {filterProduct.length === 0 ? (
          <p>No hay publicaciones Pendientes</p>
        ) : (
            
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
                  {filterProduct.map((row) => (
                    <TableRow key={row.product_id}>
                      <TableCell align="right">{row.product_id}</TableCell>
                      <TableCell align="right">{row.name}</TableCell>
                      <TableCell align="right">{row.description}</TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                      <TableCell align="right">{row.stock}</TableCell>
                      <TableCell align="right">{row.name_category}</TableCell>
                      <TableCell align="right">{row.create_at}</TableCell>
                      <TableCell align="right">
                        {row.status === "P"
                          ? "Pendiente"
                          : "Desconocido"}
                      </TableCell>
                      <TableCell align="right">{row.name_user}</TableCell>
                      <TableCell align="right">
                        <IconButton
                          color="success"
                          onClick={() => handleClick(row.product_id, "A")}
                        >
                          <CheckCircleIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            )}
          </Container>
        </main>
      </>
    );
}
export default AcceptPublications;