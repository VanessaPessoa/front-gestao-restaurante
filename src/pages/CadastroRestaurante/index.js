import React from "react";
import { useForm } from "react-hook-form";
import { Cadastrar, Container, Form, Ilustracao, Input } from "./style";
import { useNavigate } from "react-router";
import Delivery from "../../image/Delivery.avif";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button, Tab, Tabs } from "@mui/material";
import { addRestaurante } from "../../service";
import { useState } from "react";

export default function CadastroClient() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0);

  function handleBack() {
    navigate("/");
  }

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  function onSubmit(data) {
    addRestaurante(data);
  }

  return (
    <Container>
     {/* Adicionar botao aqui de voltar */}
     
      <Ilustracao src={Delivery} />

      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2> Cadastre seu restaurante </h2>
        <Tabs value={tabIndex} onChange={handleTabChange}>
          <Tab label="Informações Pessoais" />
          <Tab label="Localização" />
          <Tab label="Sobre o restaurante" />
        </Tabs>

        {tabIndex === 0 && (
          <>
            <Input
              placeholder="Nome"
              type="text"
              {...register("nome", { required: true })}
            />

            <Input
              placeholder="Telefone"
              type="text"
              {...register("telefone", { required: true })}
            />

            <Input
              placeholder="Email"
              type="email"
              {...register("email", { required: true })}
            />
            <Input
              placeholder="Senha"
              type="password"
              {...register("senha", { required: true })}
            />
          </>
        )}

        {tabIndex === 1 && (
          <>
            <Input
              placeholder="Cep"
              type="text"
              {...register("cep", { required: true })}
            />

            <Input
              placeholder="Rua"
              type="text"
              {...register("rua", { required: true })}
            />

            <Input
              placeholder="Numero"
              type="number"
              {...register("numero", { required: true })}
            />
            <Input
              placeholder="Complemento"
              type="email"
              {...register("complemento", { required: true })}
            />
            <Input
              placeholder="Cidade"
              type="text"
              {...register("cidade", { required: true })}
            />
            <Input
              placeholder="Estado"
              type="text"
              {...register("estado", { required: true })}
            />
            <Input
              placeholder="Ponto Referencia"
              type="text"
              {...register("pontoReferencia", { required: true })}
            />
          </>
        )}

        {tabIndex === 2 && (
          <>
            <Input
              placeholder="Descrição"
              type="text"
              {...register("descricao", { required: true })}
            />

            <Input
              placeholder="Especialidade"
              type="text"
              {...register("especialidade", { required: true })}
            />
            <Input
              placeholder="Imagem"
              type="text"
              {...register("imagem", { required: true })}
            />
            <Input
              placeholder="Nome do Restaurante"
              type="text"
              {...register("nomeRestaurante", { required: true })}
            />
            <Input
              placeholder="Hora abertura"
               type="time" step="1"
              {...register("horaAbertura", { required: true })}
            />
            <Input
              placeholder="Hora Fechamento"
               type="time" step="1"
              {...register("horaFechamento", { required: true })}
            />
            <Cadastrar type="submit"> Cadastrar</Cadastrar>
          </>
        )}
      </Form>
    </Container>
  );
}
