import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Cadastrar, Container, Form, Ilustracao, Input } from "./style";
import { useNavigate } from "react-router";
import Delivery from '../../image/Delivery.avif'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button } from "@mui/material";
import { addClient } from "../../service";


export default function CadastroClient() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    function handleBack(){
        navigate("/login");
    }
  function onSubmit(data) {
    addClient(data);
  }

  return (
    <Container>
      <ToastContainer />
        <Button startIcon={<ArrowBackIosIcon />} onClick={() => handleBack()}>Voltar</Button>
        <Ilustracao src = {Delivery} />

      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2> Cadastre-se </h2>
        <Input
          placeholder="Nome"
          type="text"
          {...register("name", { required: true })}
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
          {...register("password", { required: true })}
        />
        <Cadastrar type="submit"> Cadastrar</Cadastrar>
      </Form>
    </Container>
  );
}
