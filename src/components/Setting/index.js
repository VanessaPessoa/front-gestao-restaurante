import React, { useEffect, useState } from "react";
import { BoxModal, ButtonCadastro, Form } from "./styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useSelector } from "react-redux";
import { Button, Modal } from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { useForm } from "react-hook-form";
import { TextField } from "..";
import EstadoSelect from "../EstadoSelect";
import { addEndereco } from "../../service";
export default function Setting() {
  const [open, setOpen] = useState(false);
  const [estado, setEstado] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const idUser = useSelector((state) => state.auth.user.id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.clienteId = idUser;
    data.estado = estado;
    addEndereco(data);
    console.log(data);
  };

  return (
    <>
      <ToastContainer />
      <Button onClick={handleOpen}>
        <ManageAccountsIcon />
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BoxModal>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h2>Adicionar novo Endereço</h2>
            <TextField
              label={"Nome identificador"}
              register={register}
              name={"nomeIdentificador"}
              errors={errors}
              msgError={"Campo obrigatório"}
              required
            />
            <TextField
              label={"Cep"}
              register={register}
              name={"cep"}
              errors={errors}
              msgError={"Campo obrigatório"}
              required
            />
            <TextField
              label={"Rua"}
              register={register}
              name={"rua"}
              errors={errors}
              msgError={"Campo obrigatório"}
              required
            />
            <TextField
              label={"Numero"}
              register={register}
              name={"numero"}
              errors={errors}
              msgError={"Campo obrigatório"}
              required
            />
            <TextField
              label={"Complemento"}
              register={register}
              name={"complemento"}
              errors={errors}
              msgError={"Campo obrigatório"}
              required
            />
            <TextField
              label={"Ponto Referencia"}
              register={register}
              name={"pontoReferencia"}
              errors={errors}
              msgError={"Campo obrigatório"}
              required
            />

            <TextField
              label={"Cidade"}
              register={register}
              name={"cidade"}
              errors={errors}
              msgError={"Campo obrigatório"}
              required
            />
            <EstadoSelect estado={estado} setEstado={setEstado} />

            <ButtonCadastro> Cadastrar Endereço </ButtonCadastro>
          </Form>
        </BoxModal>
      </Modal>
    </>
  );
}
