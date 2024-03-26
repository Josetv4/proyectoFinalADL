import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";

const ShoppingCard = ( { shopping } ) => {
  return (

    { shopping.map( producto => (
      <Card key={producto.id} className={classes.root}>
        
        <CardContent>
          <Typography variant="body1">{producto.fecha}</Typography>
        </CardContent>

        
        <CardContent>
          <img className={classes.image} src={producto.imagen} alt={producto.descripcion} />
          <Typography variant="body1">{producto.descripcion}</Typography>
          <Typography variant="body1">{producto.precio}</Typography>
        </CardContent>

      
        <CardActions>
          <Button variant="contained" color="primary">Comprar</Button>
        </CardActions>
      </Card>
    ))}
  );
};

export default ShoppingCard;
