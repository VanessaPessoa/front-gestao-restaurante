import {
  Button,
  CardActionArea,
  CardActions,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useStyles } from "./styles";
import { useDispatch } from "react-redux";

import { addItem } from "../../store/modules/carrinho/action";

export default function MultiActionAreaCard({
  img,
  name,
  description,
  price,
  id,
}) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const addItemCarrinho = () => {
    dispatch(addItem({ id, name, price }));
  };

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.content}
          component="img"
          height="200px"
          width="200px"
          distance="10px"
          image={img}
          alt={`logo restaurante ${name}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="p" component="div">
            {description}
          </Typography>
          <Typography gutterBottom variant="p" component="div">
            Preço: R${price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={addItemCarrinho}> Adicionar no carrinho </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
