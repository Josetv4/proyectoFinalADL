import React from "react";
import { Box, Avatar, Typography } from "@mui/material";

const RegularUser = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center"
        }}>
        <Box>
          <Avatar
            sx={{ width: 100, height: 100 }}
            alt="Remy Sharp"
            src="https://tn.com.ar/resizer/jT7boEBw5JfiLkgweUbQ5a0evZI=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/4RGWEM5MSRCWTBSIBAZGQ2QEHU.jpg"
          />
        </Box>
        <Typography
          sx={{
            color: "var(--font-body-color)",
            fontFamily: "var(--font-title)",
            fontSize: "22px",
          }}
        >
          ¡Hola Ben!
        </Typography>
      </Box>
    </Box>
  );
};

export default RegularUser;
