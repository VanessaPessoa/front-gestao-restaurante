import React, { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useStyles } from "./styles";
import { useQuery } from "react-query";
import { getAllEndereco } from "../../service";
import { useSelector } from "react-redux";

function EnderecoSelect({ identificador, setIdentificador }) {
  const [enderecos, setEnderecos] = useState([]);
  const id = useSelector((state) => state.auth.user.id);

  const { isLoading } = useQuery({
    queryKey: ["enderecos"],
    queryFn: () => getAllEndereco(id),
    onSuccess: (data) => {
      console.log(data.data.data[0].enderecos);
      setEnderecos(data.data.data[0].enderecos);
    },
    keepPreviousData: true,
  });
  const classes = useStyles();

  const handleChange = (event) => {
    setIdentificador(event.target.value);
  };

  if (isLoading) {
    return <p> Carregando... </p>;
  }

  return (
    <>
      {enderecos.length > 0 ? (
        <FormControl className={classes.input}>
          <InputLabel>Endereço</InputLabel>
          <Select value={identificador} onChange={handleChange}>
            {enderecos.map((endereco) => (
              <MenuItem key={endereco.id} value={endereco.id}>
                {endereco.nomeIdentificador}: {endereco.rua},{endereco.numero}.{" "}
                {endereco.cidade}-{endereco.estado}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : (
        <p> Você não possui endereço cadastrado</p>
      )}
    </>
  );
}

export default EnderecoSelect;
