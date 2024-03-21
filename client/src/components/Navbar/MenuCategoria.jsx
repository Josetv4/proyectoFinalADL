import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { KeyboardArrowDown as KeyboardArrowDownIcon } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { buttonStyles } from '../../utils/UtilsNavbar/ButtonStyleHoverFocus';

const categories = [
  { nombre: "Belleza", id: 1 },
  { nombre: "Anticonceptivos", id: 2 },
  { nombre: "Antidepresivos", id: 3 },
  { nombre: "Antipsicóticos", id: 40 },
  { nombre: "Analgésicos", id: 32 },
  { nombre: "Antipiréticos", id: 12 },
  { nombre: "Antidiarreicos", id: 414 },
  { nombre: "Antihipertensivos", id: 123 },
  { nombre: "Oftamológico", id: 432 },
  { nombre: "Diabetes", id: 7 },
];

const buttonStyles1 = {
  margin: "2px",
  color: "var(--font-navbar-color)",
  fontFamily: "var(--font-title)",
  fontSize: "1.1rem",
};

const MenuCategoria = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="button-category"
        aria-controls={open ? "button-category" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          ...buttonStyles,
          ...buttonStyles1,
          my: 2,
          fontSize: "115%",
        }}
      >
        Categorías
        <KeyboardArrowDownIcon />
      </Button>
      <Menu
        id="menu-categoria"
        aria-labelledby="menu-categoria"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {categories.map((category) => (
          <MenuItem
            key={category.id}
            onClick={handleClose}
            component={NavLink}
            to={`/category/${category.id}`}
            sx={buttonStyles}
          >
            {category.nombre}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MenuCategoria;
