import { Box, Avatar, Typography, List, ListItem } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import UseForm from "../../components/UserForms/UseForms";
import ButtonBig from "../../components/Buttons/buttonBig/buttonBig";
import ButtonOutline from "../../components/Buttons/buttonBigoutline/buttonOutline";
import Birthday from "../../utils/Birthday";
import gravatar from 'gravatar';

const containerFlex = {
  display: "flex",
  gap: "220px",
  flexWrap: "wrap",
};

const RegularUserProfile = () => {
  const { user } = useAuth();
  return (
    <Box sx={{ ...containerFlex, justifyContent: 'center', mt: '5px', mb: '5px', alignItems: 'center'}}>
      <Box>
        <Box sx={{ ...containerFlex, gap: '15px'}}>
          <Box>
            <Avatar
              sx={{ width: 90, height: 90 }}
              alt="Avatar"
              src={gravatar.url(user.email, { s: '200', d: 'identicon', r: 'pg' })}
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
        <Box sx={{ display:'flex', flexDirection: "column", gap: '15px' }}>
          <ButtonBig to="/list-favorites">Ver tus Favoritos</ButtonBig>
          <ButtonOutline to="/last-shopping">Tus últimas compras</ButtonOutline>
        </Box>
      </Box>
      <UseForm />
    </Box>
  );
};

export default RegularUserProfile;

