import React from "react";
import { useForm } from "react-hook-form";
import { Cadastrar, Container, Form, Ilustracao, Input } from "./style";
import { useNavigate } from "react-router";
import Delivery from '../../image/Delivery.avif'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button } from "@mui/material";


export default function CadastroClient() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();

    function handleBack(){
        navigate("/login");
    }
  function onSubmit(data) {
    // console.log(data);
  }

  return (
    <Container>
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
          type="tel"
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
          {...register("passowrd", { required: true })}
        />

        <Input
          placeholder="Confirmar senha"
          type="password"
          {...register("confirmar", { required: true, 
            validate: (value) => {
                return value === watch('senha');
            }
          })}
        />
        {errors.confirmar && errors.confirmar.type === "required" && (
          <span className="error">Informe a senha</span>
        )}
        {errors.confirmar && errors.confirmar.type === "validate" && (
          <span className="error">As senhas não correspondem</span>
        )}
        <Cadastrar> Cadastrar</Cadastrar>
      </Form>
    </Container>
  );
}
