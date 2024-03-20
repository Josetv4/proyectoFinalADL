import React, { useState } from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { KeyboardArrowDown as KeyboardArrowDownIcon } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

const categories = [
  {nombre: "Belleza" , id : 1 },
  {nombre: "Anticonceptivos" , id : 2 },
  {nombre: "Antidepresivos" , id : 3 },
  {nombre: "Antipsicóticos" , id : 40},
  {nombre: "Analgésicos" , id : 32},
  {nombre: "Antipiréticos" , id : 12},
  {nombre: "Antidiarreicos" , id : 414},
  {nombre: "Antihipertensivos" , id : 123 },
  {nombre: "Oftamológico" , id : 432},
  {nombre: "Diabetes" , id : 7 },
]

const MenuCategoria = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [id , setId] = useState();
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    const { myId } = event.target.dataset;
    setId(myId);
    navigate(`/category/${myId}`);
  };

  const goCategory = () => {
    navigate(`/category/${id}`);
  }

  return (
    <div>
      <Button
        id="button-category"
        aria-controls={open ? 'button-category' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          my: 2,
          color: 'var(--font-navbar-color)',
          fontFamily: 'var(--font-title)',
          fontSize: '115%',
          textDecoration: 'none',
          textTransform: 'none',
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
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {categories.map( (category) => (
          <MenuItem
          key={category.id}
          onClick={handleClose}
          data-my-id={category.id}>
            {category.nombre}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default MenuCategoria;
