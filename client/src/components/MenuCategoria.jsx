import React, { useEffect } from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
    setAnchorEl(null);
    const { myId } = event.target.dataset;
    console.log("myId :" , myId)
    setId(myId);
    navigate(`/category/${myId}`);
  };

  const goCategory = () => {
    navigate(`/category/${id}`);
  }

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        activeclassname="active"
        sx={{
            my: 2,
            color: '#3C5257',
            display: 'block',
            textDecoration: 'none',
            '&.active': {
                color: 'red',
            },
        }}
      >
        Categorías
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {categories.map( (category) => (
          <MenuItem key={category.id} onClick={handleClose} data-my-id={category.id} >{category.nombre}</MenuItem>        
        ))}
      </Menu>
    </div>
  );
}
export default MenuCategoria;