import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  CardActions,
} from "@mui/material/";
import EditPrato from "../EditPrato";
import { useStyles } from "./styles";

export default function MultiActionAreaCard({
  idRestaurante,
  img,
  name,
  description,
  price,
  id,
}) {
  const classes = useStyles();

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
          <EditPrato
            idRestaurante={idRestaurante}
            nome={name}
            idPrato={id}
          ></EditPrato>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
