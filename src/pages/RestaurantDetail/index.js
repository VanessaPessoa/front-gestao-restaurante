import { Box, Container, Infos, MyRestaurant, Title } from "./styles";

import { CardMenu } from "../../components";
import { useQuery } from "react-query";
import { useState } from "react";
import { getRestaurante } from "../../service";
import { Button, Grid, Modal } from "@mui/material";
import AddPrato from "../../components/AddPrato";

import { useSelector, useDispatch } from "react-redux";

import * as actions from "../../store/modules/auth/action";
import { useNavigate } from "react-router-dom";

export default function RestaurantDetail() {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [restaurante, setRestaurante] = useState([]);
  const id = useSelector((state) => state.auth.user.id);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const { isLoading } = useQuery({
    queryKey: ["products", page],
    queryFn: () => getRestaurante(page, totalPages, id),
    onSuccess: (data) => {
      setRestaurante(data.data.data[0]);
    },
    keepPreviousData: true,
  });

  const getMenu = () => {
    if (restaurante) {
      return restaurante.pratos;
    }
  };

  if (isLoading) {
    return <p> Carregando ... </p>;
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure());

    navigate("/");
  };
  return (
    <Container>
      {restaurante && (
        <>
          <MyRestaurant>
            <Title>{restaurante.nome}</Title>
            <AddPrato id={id}></AddPrato>
            <Button onClick={handleLogout}>
              <span> Sair</span>
            </Button>
          </MyRestaurant>
          <MyRestaurant>
            <Infos>
              <h2> Endereço: </h2>
              <p>
                {restaurante.rua}, {restaurante.numero}
              </p>
              <p>
                {restaurante.cidade} - {restaurante.estado}
              </p>
            </Infos>

            <Infos>
              <h2> Contatos: </h2>
              <p> {restaurante.telefone} </p>
              <p> {restaurante.email} </p>
            </Infos>
          </MyRestaurant>
        </>
      )}

      <Title>Seu cardapio</Title>

      <Box>
        {getMenu() &&
          getMenu().map((item) => (
            <CardMenu
              key={item.id}
              name={item.nome}
              img={item.imagem}
              price={item.valor}
              description={item.descricao}
            />
          ))}
      </Box>
    </Container>
  );
}
