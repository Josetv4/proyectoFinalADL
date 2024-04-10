import { Box, Avatar, Typography, List, ListItem } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import UseForm from "../../components/UserForms/UseForms";
import ButtonBig from "../../components/Buttons/buttonBig/buttonBig";
import ButtonOutline from "../../components/Buttons/buttonBigoutline/buttonOutline";
import Birthday from "../../utils/Birthday";
import logoAdmin from '../../assets/imgs/logoAdmin.png';

const containerFlex = {
  display: "flex",
  gap: "220px",
  flexWrap: "wrap",
};

const AdminUser = () => {
  const { user } = useAuth();

  return (
    <Box sx={{ ...containerFlex, justifyContent: 'center', mt: '5px', mb: '5px', alignItems: 'center' }}>
      <Box>
        <Box sx={{ ...containerFlex, gap: '15px' }}>
          <Box>
            <Avatar
              sx={{ width: 100, height: 100 }}
              alt="Logo farmacia s y g"
              src={logoAdmin}
            />
          </Box>
          <List
            sx={{
              color: "var(--font-placeholder-color)",
              fontFamily: "var(--font-body)",
              fontSize: "12px",
            }}
          >
            {user && (
              <>
                <Typography
                  sx={{
                    color: "var(--font-body-color)",
                    fontFamily: "var(--font-title)",
                    fontSize: "22px",
                  }}
                >
                  ¡Bienvenido {user.username}!
                </Typography>
                <ListItem>
                  <Birthday birthDate={user.birth_date} />
                </ListItem>
                <ListItem>{user.phone}</ListItem>
              </>
            )}
          </List>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: "column", gap: '15px' }}>
          <ButtonBig to="/list-products">Productos</ButtonBig>
          <ButtonOutline to="/list-users">Usuarios</ButtonOutline>
          <ButtonBig to="/accept-publication">Publicaciones</ButtonBig>
        </Box>
      </Box>
      <UseForm />
    </Box>
  );
};

export default AdminUser;
