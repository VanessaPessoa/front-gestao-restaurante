import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useStyles } from "./styles"

export default function MultiActionAreaCard({img, name, description, price}) {
  const classes = useStyles();

  const getLogo = () => {
    let logo =  "../../image/login.jpg" ;
    if(img){
      logo = require(`../../image/${img}`);
    }
    return logo;
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
          image={getLogo()}
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
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Ver detalhes
        </Button>
      </CardActions>
    </Card>
  );
}