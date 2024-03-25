import React from "react";
import { Box, Avatar, Typography, List, ListItem } from "@mui/material";

import UseFormRegular from "../../components/UserForms/UseFormsRegular";

const containerFlex = {
  display: "flex",
  gap: "220px",
  flexWrap: "wrap",
};

const SellerUser = () => {
  return (
    <Box sx={{ ...containerFlex, justifyContent: 'center', mt: '5px', mb: '5px', alignItems: 'center'}}>
      <Box>
        <Box sx={{ ...containerFlex, gap: '15px'}}>
          <Box>
            <Avatar
              sx={{ width: 150, height: 150 }}
              alt="Remy Sharp"
              src="https://tn.com.ar/resizer/jT7boEBw5JfiLkgweUbQ5a0evZI=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/4RGWEM5MSRCWTBSIBAZGQ2QEHU.jpg"
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
              ¡Hola Ben!
            </Typography>
            <ListItem>30 años</ListItem>
            <ListItem>+569 999000999</ListItem>
          </List>
        </Box>
      </Box>
      <UseFormRegular />
    </Box>
  );
};

export default SellerUser;

