import { Box, Avatar, Typography, List, ListItem } from "@mui/material";

import UseForm from "../../components/UserForms/UseForms";
import ButtonBig from "../../components/Buttons/buttonBig/buttonBig";
import ButtonOutline from "../../components/Buttons/buttonBigoutline/buttonOutline";

const containerFlex = {
  display: "flex",
  gap: "220px",
  flexWrap: "wrap",
};

const AdminUser = () => {
  return (
    <Box sx={{ ...containerFlex, justifyContent: 'center', mt: '5px', mb: '5px', alignItems: 'center'}}>
      <Box>
        <Box sx={{ ...containerFlex, gap: '15px'}}>
          <Box>
            <Avatar
              sx={{ width: 100, height: 100 }}
              alt="Remy Sharp"
              src="https://www.shutterstock.com/shutterstock/photos/1865153395/display_1500/stock-photo-portrait-of-young-smiling-woman-looking-at-camera-with-crossed-arms-happy-girl-standing-in-1865153395.jpg"
            />
          </Box>
          <List
            sx={{
              color: "var(--font-placeholder-color)",
              fontFamily: "var(--font-body)",
              fontSize: "12px",
            }}
          >
            <Typography
              sx={{
                color: "var(--font-body-color)",
                fontFamily: "var(--font-title)",
                fontSize: "22px",
              }}
            >
              ¡Oriana!
            </Typography>
            <ListItem>30 años</ListItem>
            <ListItem>+569 999000999</ListItem>
          </List>
        </Box>
        <Box sx={{ display:'flex', flexDirection: "column", gap: '15px' }}>
          <ButtonBig>Haz una publicación</ButtonBig>
          <ButtonOutline>Tus publicaciones</ButtonOutline>
        </Box>
      </Box>
      <UseForm />
    </Box>
  );
};

export default AdminUser;

