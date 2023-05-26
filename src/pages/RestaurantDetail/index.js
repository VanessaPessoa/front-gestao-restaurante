import { Box, Container, Title } from "./styles";

import { menu } from "../../data/menu";
import { CardMenu } from "../../components";

export default function RestaurantDetail() {
  const getMenu = () => {
    if (menu) {
      const restaurante = menu.filter((item) => item.idRestaurante === "01");
      return restaurante[0].menu;
    }
    return null;
  };

  return (
    <Container>

    </Container>
  );
}
