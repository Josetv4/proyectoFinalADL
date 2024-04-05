import { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { DataContext } from "../../context/DataContext";

const ShoppingCard = () => {
  const { products } = useContext(DataContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <main>
      <Container>
        <h1>Tus últimas compras</h1>
        {products.product.map((product) => (
          <Card key={product.product_id} className="shopping-card">
            <CardContent className="shopping-card-content">
              <Typography variant="p" className="shopping-card-color">
                Fecha de Compra
              </Typography>
              <Typography variant="p">
                Publicado el {new Date(product.create_at).getDate()} de{" "}
                {new Date(product.create_at).toLocaleString("es", {
                  month: "long"
                })}{" "}
                del {new Date(product.create_at).getFullYear()}
              </Typography>
            </CardContent>
            <CardContent className="shopping-box-content">
              <Box>
                <img
                  className="shopping-card-image"
                  src={product.image_url}
                  alt={product.description}
                />
              </Box>
              <Box className="shopping-card-content">
                <Typography variant="p">{product.name}</Typography>
                <Typography variant="p" className="shopping-card-color">
                  {product.price}
                </Typography>
                <Typography variant="p">
                  Vendido por <a href="#">{product.user_id}</a>
                </Typography>
              </Box>
            </CardContent>
            <CardActions sx={{ marginRight: 2 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={toggleDrawer}
              >
                Comenta tus productos
              </Button>
            </CardActions>
          </Card>
        ))}
      </Container>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        sx={{ width: 250 }}
      >
        {DrawerList}
      </Drawer>
    </main>
  );
};

export default ShoppingCard;
