import { Card, Container, Button, Form, ButtonCadastro } from "./styles";
import { useForm } from "react-hook-form";
import { TextField } from "../../components";
import { useNavigate } from "react-router";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useState } from "react";
import {useDispatch} from 'react-redux'
import * as actions from '../../store/modules/auth/action'
import { get } from 'lodash'

export default function Login(props) {
  const [checked, setChecked] = useState(false);
  const prevPath = get(props, 'location.state.prevPath', '/');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    var restaurante = checked;
    dispatch(actions.loginRequest({data, restaurante, prevPath}));
  };

  const handleCadastro = () => {
    navigate("/cadastrar");
  };

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <Container>
      <Card>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label={"Nome"}
            register={register}
            name={"nome"}
            errors={errors}
            msgError={"Campo obrigatório"}
            required
            type="text"
          />
          <TextField
            label={"Senha"}
            register={register}
            name={"password"}
            errors={errors}
            msgError={"Campo obrigatório"}
            required
            type="password"
          />

          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="Restaurante"
              checked={checked}
              onChange={handleChange}
            ></FormControlLabel>
          </FormGroup>

          <Button type="submit"> Entrar </Button>
          <ButtonCadastro onClick={handleCadastro}> Cadastrar </ButtonCadastro>
        </Form>
      </Card>
    </Container>
  );
}
