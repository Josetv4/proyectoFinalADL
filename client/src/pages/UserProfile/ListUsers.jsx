import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";
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
import CheckIcon from "@mui/icons-material/Check";

import { getUsers, getStatusUser } from "../../api/getApi";
import { formatDate } from "../../utils/DateFormat"

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleClick = async (id, status) => {
    try {
      const { response, error } = await getStatusUser(id, status);

      if (error) {
        swal(error, { icon: "error", });
        await logout();
        navigate("/login");
      } else {
        swal(response.message, { icon: "success", });
      }
      fetchUsers();
    } catch (error) {
      console.error("Erro al cambiar status del usuario : ", error);
    }
  };

  const fetchUsers = async () => {
    try {
      const { response } = await getUsers();
      setUsers(response.user);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      navigate("/login");    
    }
  };

  return (
    <>
      <main>
        <h2>Activar-Desactivar usuarios</h2>
        <Container>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell align="left">Nombre</TableCell>
                  <TableCell align="left">Rut</TableCell>
                  <TableCell align="left">Fecha Nacimiento</TableCell>
                  <TableCell align="left">Email</TableCell>
                  <TableCell align="left">Telefono</TableCell>
                  <TableCell align="left">Rol</TableCell>
                  <TableCell align="left">status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((row) => (
                  <TableRow
                    key={row.user_id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.user_id}{" "}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.username}
                    </TableCell>
                    <TableCell align="left">{row.rut}</TableCell>
                    <TableCell align="left">{formatDate(row.birth_date)}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">{row.phone}</TableCell>
                    <TableCell align="left">{row.role}</TableCell>
                    <TableCell align="left">
                    {row.status === "A"
                        ? "Activo"
                        : "Borrado"
                        }
                    </TableCell>
                    
                    <TableCell align="right">
                      <IconButton
                        color="success"
                        onClick={() => handleClick(row.user_id, "A")}
                      >
                        <CheckIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell align="right">
                      <IconButton
                        color="error"
                        onClick={() => handleClick(row.user_id, "X")}
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

export default ListUsers;
