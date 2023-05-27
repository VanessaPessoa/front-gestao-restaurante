import { CardRestaurant } from "../../components";
import { listRestaurant } from "../../data/restaurant";
import { Container, Title, Box } from "./styles";

export default function ListRestaurant() {
  return (
    <Container>
      <Title>Meus Restaurantes</Title>
      <Box>
        {listRestaurant &&
          listRestaurant.map((item) => (
            <CardRestaurant key={item.id} name={item.name} img={item.image} />
          ))}
      </Box>
    </Container>
  );
}
