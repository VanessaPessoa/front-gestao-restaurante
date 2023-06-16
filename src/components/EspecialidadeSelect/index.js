import React from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const especialidades = [
  "Açaí",
  "Africana",
  "Arabe",
  "Alemã",
  "Argentina",
  "Bebidas",
  "Brasileira",
  "Cafeteria",
  "Carnes",
  "Chinesa",
  "Congelados",
  "Colombiana",
  "Coreana",
  "Doces e bolos",
  "Espanhola",
  "Francesa",
  "Peixes",
  "Marmita",
  "Mexicana",
  "Salgados",
  "Saudavel",
  "Sorvete",
  "Lanches",
  "Sucos",
];

function EspecialidadeSelect({ especialidade, setEspecialidade }) {
  const handleChange = (event) => {
    setEspecialidade(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Especialidade</InputLabel>
      <Select value={especialidade} onChange={handleChange} label="Especialidade">
        {especialidades.map((element) => (
          <MenuItem key={element} value={element}>
            {element}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default EspecialidadeSelect;
