import { Box, Container, MyRestaurant, Title } from "./styles";

import { CardMenu } from "../../components";
import { useQuery } from "react-query";
import { useState } from "react";
import { getRestaurante } from "../../service";
import AddPrato from "../../components/AddPrato";

import { useSelector, useDispatch } from "react-redux";

import * as actions from "../../store/modules/auth/action";
import { useNavigate } from "react-router-dom";
import ButtonLogout from "../../components/ButtonLogout";

export default function RestaurantDetail() {
  const [restaurante, setRestaurante] = useState([]);
  const id = useSelector((state) => state.auth.user.id);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const { isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => getRestaurante(1, 0, id),
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
           <div className="info1">
             <Title>{restaurante.nomeRestaurante}</Title>
           </div>
            <div className="info2">
            <AddPrato id={id}></AddPrato>
            </div>
            <div className="info3">
            <ButtonLogout onClick={handleLogout}>
              <span> Sair</span>
            </ButtonLogout>
            </div>
          
            <div className="info4">
              <h2> Endereço: </h2>
              <p>
                {restaurante.rua}, {restaurante.numero}
              </p>
              <p>
                {restaurante.cidade} - {restaurante.estado}
              </p>
            </div>

            <div className="info5">
              <h2> Contatos: </h2>
              <p> {restaurante.telefone} </p>
              <p> {restaurante.email} </p>
            </div>
            <div className="info6">
              <h2> Funcionamento: </h2>
              <p> De {restaurante.horaAbertura} ás {restaurante.horaFechamento} </p>
            </div>
          </MyRestaurant>
        </>
      )}

      <Title>Seu cardapio</Title>

      <Box>
        {getMenu() &&
          getMenu().map((item) => (
            <CardMenu
              key={item.id}
              id={item.id}
              name={item.nome}
              img={item.imagem}
              price={item.valor}
              description={item.descricao}
              idRestaurante={id}
            />
          ))}
      </Box>
    </Container>
  );
}
