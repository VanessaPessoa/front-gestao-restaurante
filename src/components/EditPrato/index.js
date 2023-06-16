import { useEffect, useState } from "react";
import { Button, Modal } from "@mui/material";
import { ToastContainer } from 'react-toastify';
import { TextField } from "..";
import { useForm } from "react-hook-form";
import { editPrato } from "../../service";

import 'react-toastify/dist/ReactToastify.css';
import { BoxModal, Form, ButtonCadastro } from "./style";


export default function EditPrato({ idRestaurante, nome, idPrato }) {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setValue("nome", nome)
  }, [setValue, nome]);

  const onSubmit = (data) => {
    data.restauranteId = idRestaurante;
    editPrato(data, idPrato);
    
  };

  return (
    <>
    <ToastContainer />

      <Button onClick={handleOpen}> Editar Pratos </Button>
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
              disabled
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
            <ButtonCadastro type="submit">Editar Prato </ButtonCadastro>
          </Form>
        </BoxModal>
      </Modal>
    </>
  );
}
