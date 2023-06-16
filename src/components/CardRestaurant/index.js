import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Image from "mui-image";

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

export default function MultiActionAreaCard({ img, name, id }) {
  const classes = useStyles();
  const perfil = useSelector((state) => state.auth.user.perfil);
  const navigate = useNavigate();
  const onClickMenu = () => {
    navigate(`/menu/${id}`);
  };
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Image src={img} alt="" fit="contain" height="200px" width="200px" />
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      {perfil === "cliente" && (
        <CardActions>
          <Button size="small" color="primary" onClick={onClickMenu}>
            Ver cardapio
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
