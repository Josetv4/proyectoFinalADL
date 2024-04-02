import{ useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { KeyboardArrowDown as KeyboardArrowDownIcon } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

import { buttonStyles } from './ButtonStyleHoverFocus';
import { getCategories } from "../../api/getApi";

const buttonStyles1 = {
  margin: "2px",
  color: "var(--font-navbar-color)",
  fontFamily: "var(--font-title)",
  fontSize: "1.1rem",
};

const MenuCategoria = () => {

  const [categories,setCategories] = useState([]);

  useEffect(()=>{
    asyncGetCategories();
  },[]);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const asyncGetCategories = async()=>{
    try {
      const response = await getCategories();
      setCategories(response.response.category)
    } catch (error) {
      console.log(error)
    }
  }

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
        {categories && categories.map((category) => (
          <MenuItem
            key={category.category_id}
            onClick={handleClose}
            component={NavLink}
            to={`/category/${category.category_id}/${category.name}`}
            sx={buttonStyles}
          >
            {category.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MenuCategoria;
