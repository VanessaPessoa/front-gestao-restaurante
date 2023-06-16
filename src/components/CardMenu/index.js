import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useStyles } from "./styles";
import EditPrato from "../EditPrato";

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
          {/* ADICIONAR BOTÂO EDITAR */}
          <EditPrato idRestaurante={idRestaurante} nome={name} idPrato={id}></EditPrato>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
