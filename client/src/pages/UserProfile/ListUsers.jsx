import { useState, useEffect } from "react";
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

const ListUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleClick = async (id, status) => {
    await getStatusUser(id, status);
    fetchUsers();
  };

  const fetchUsers = async () => {
    try {
      const { response } = await getUsers();
      setUsers(response.user);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
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
                  <TableCell align="right">Nombre</TableCell>
                  <TableCell align="right">Rut</TableCell>
                  <TableCell align="right">Fecha Nacimiento</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Telefono</TableCell>
                  <TableCell align="right">Rol</TableCell>
                  <TableCell align="right">status</TableCell>
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
                    <TableCell align="right">{row.rut}</TableCell>
                    <TableCell align="right">{row.birth_date}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.phone}</TableCell>
                    <TableCell align="right">{row.rol}</TableCell>
                    <TableCell align="right">{row.status}</TableCell>
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
