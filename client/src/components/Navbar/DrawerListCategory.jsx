import React, { useState } from "react";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
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
    color: 'var(--font-navbar-color3)',
    fontFamily: 'var(--font-title)',
    fontSize: '0.75rem',
    paddingLeft: '18%',
};

const buttonStyles2 = {
    my: 2,
    color: 'var(--font-navbar-color3)',
    fontFamily: 'var(--font-title)',
    fontSize: '1.5rem',
};

const ListCategory = ({ NavLinkComponent }) => {
    const [open, setOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    const handleToggle = (event) => {
        event.stopPropagation();
        setOpen(!open);
    };

    const handleCategoryClick = (categoryId) => {
        setSelectedCategory(categoryId);
        navigate(`/category/${categoryId}`);
    };

    return (
        <div>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <ListItemButton onClick={handleToggle} sx={{...buttonStyles, ...buttonStyles2}}>
                    Categoría
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {categories.map((category) => (
                            <ListItemButton
                                key={category.id}
                                sx={{...buttonStyles, ...buttonStyles1}}
                                selected={selectedCategory === category.id}
                                onClick={() => handleCategoryClick(category.id)}
                                component={NavLinkComponent}
                                to={`/category/${category.id}`}
                            >
                                <ListItemText primary={category.nombre} />
                            </ListItemButton>
                        ))}
                    </List>
                </Collapse>
            </List>
        </div>
    );
};

export default ListCategory;


