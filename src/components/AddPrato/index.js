import { useState } from "react";

import { ToastContainer } from 'react-toastify';
import { Button, Modal } from "@mui/material";
import { TextField } from "..";
import { useForm } from "react-hook-form";
import { addPrato } from "../../service";

import { BoxModal, Form, ButtonCadastro } from "./style";
import 'react-toastify/dist/ReactToastify.css';


export default function AddPrato({ id }) {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = (data) => {
    data.restauranteId = id;
    addPrato(data);
    
  };

  return (
    <>
    <ToastContainer />

      <Button onClick={handleOpen}> Adicionar Pratos </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BoxModal>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label={"Nome"}
              register={register}
              name={"nome"}
              errors={errors}
              msgError={"Campo obrigatório"}
              required
            />
            <TextField
              label={"Descrição"}
              register={register}
              name={"descricao"}
              errors={errors}
              msgError={"Campo obrigatório"}
              required
            />
            <TextField
              label={"Imagem"}
              register={register}
              name={"imagem"}
              errors={errors}
              msgError={"Campo obrigatório"}
              required
              type="text"
            />
            <TextField
              label={"Valor"}
              register={register}
              name={"valor"}
              errors={errors}
              msgError={"Campo obrigatório"}
              required
            />
            <ButtonCadastro type="submit">Cadastrar Prato </ButtonCadastro>
          </Form>
        </BoxModal>
      </Modal>
    </>
  );
}
