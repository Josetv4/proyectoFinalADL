import React from "react";
import {
  Box,
  Avatar,
  Typography,
} from '@mui/material';

const MenuSellerUser = () => {


  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }} onClick={(e) => e.stopPropagation()}>
      <Box>
        <Avatar sx={{ width: 100, height: 100 }} alt="Remy Sharp" src="https://www.evopayments.mx/blog/wp-content/uploads/2023/03/Como-ser-una-mujer-exitosa-en-los-negocio-770x513.jpeg" />
      </Box>
      <Typography
        sx={{
          color: 'var(--font-body-color)',
          fontFamily: 'var(--font-title)',
          fontSize: '22px',
        }}
      >
        ¡Hola Alondra!
      </Typography>
    </Box>
  );
};

export default MenuSellerUser;
