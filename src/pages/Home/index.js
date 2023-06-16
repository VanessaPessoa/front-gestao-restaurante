import { useState } from "react";
import Header from "../../components/Header";
import { useQuery } from "react-query";
import { getAllRestaurante } from "../../service";
import { CardRestaurant } from "../../components";
import { Title, Box } from "./styles";
import { Container } from "@mui/material";

function Home() {
  const [restaurantes, setRestaurantes] = useState([]);

  const { isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => getAllRestaurante(),
    onSuccess: (data) => {
      setRestaurantes(data.data.data);
    },
    keepPreviousData: true,
  });

  if (isLoading) {
    return <p> Carregando... </p>;
  }

  return (
    <div>
      <Header />
      <Container>
        <Title> Restaurantes</Title>
        <Box>
          {restaurantes.length > 0 &&
            restaurantes.map((item) => (
              <CardRestaurant
                key={item.id}
                img={item.imagem}
                name={item.nomeRestaurante}
                id={item.id}
              />
            ))}
        </Box>
      </Container>
    </div>
  );
}

export default Home;
