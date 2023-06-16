import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useStyles } from "./styles"
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function MultiActionAreaCard({img, name, id}) {
  const classes = useStyles();
  const perfil = useSelector(state => state.auth.user.perfil); 
  const navigate = useNavigate();
  const onClickMenu = () => {
    navigate(`/menu/${id}`)
  }
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