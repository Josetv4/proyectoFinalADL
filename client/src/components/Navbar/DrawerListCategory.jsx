import  { useEffect, useState } from "react";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { buttonStyles } from './ButtonStyleHoverFocus';
import { getCategories } from "../../api/getApi";

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
    const [categories,setCategories] = useState([]);
    const navigate = useNavigate();


    useEffect(()=>{
      asyncGetCategories();
    },[]);

    const handleToggle = (event) => {
        event.stopPropagation();
        setOpen(!open);
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
                        {categories && categories.map((category) => (
                            <ListItemButton
                                key={category.category_id}
                                sx={{...buttonStyles, ...buttonStyles1}}
                                selected={selectedCategory === category.category_id}
                                component={NavLinkComponent}
                                to={`/category/${category.category_id}/${category.name}`}
                            >
                                <ListItemText primary={category.name} />
                            </ListItemButton>
                        ))}
                    </List>
                </Collapse>
            </List>
        </div>
    );
};

export default ListCategory;

