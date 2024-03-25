import React from "react";
import {
  Box,
  Avatar,
  Typography,
} from '@mui/material';

const AdminUser = () => {


  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }} >
        <Box>
          <Avatar sx={{ width: 100, height: 100 }} alt="Remy Sharp" src="https://www.shutterstock.com/shutterstock/photos/1865153395/display_1500/stock-photo-portrait-of-young-smiling-woman-looking-at-camera-with-crossed-arms-happy-girl-standing-in-1865153395.jpg" />
        </Box>
        <Typography
          sx={{
            color: 'var(--font-body-color)',
            fontFamily: 'var(--font-title)',
            fontSize: '22px',
          }}
        >
          ¡Hola Oriana!
        </Typography>
      </Box>
    </Box>
  );
};

export default AdminUser;
