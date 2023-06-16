import React, {useEffect, useState} from 'react';
import { BoxModal, Li, ButtonCadastro } from "./styles";

import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { Delete, ShoppingCart } from '@mui/icons-material';
import { Button, Modal } from '@mui/material';

import {limparCarrinho, removeItem} from "../../store/modules/carrinho/action";

export default function Carrinho() {
    const carrinho = useSelector(state => state.carrinho);
    const [count, setCount] = useState(0)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    const dispatch = useDispatch();

    useEffect(()=> {
        setCount( carrinho.length);
    }, [carrinho])
    
    const calcularValorTotal = () => {
        let valorTotal = 0;
        carrinho.forEach(item => {
          valorTotal += item.price;
        });
        return valorTotal;
      };

    const handleLimparCarrinho = () => {
        dispatch(limparCarrinho());
      };

      const handleRemoverItem = (id) => {
        dispatch(removeItem(id));
      };
  return (
   <>
    <Button onClick={handleOpen}>
        Carrinho
        <Badge badgeContent={count} color="primary">
      <ShoppingCart color="action" />
    </Badge>
    </Button>

    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BoxModal>
        <ul>
        {carrinho.map(item => (
          <Li key={item.id}>
            <p>Nome: {item.name}</p>
            <p>Preço: {item.price}</p>
            <p>Quantidade: {item.quantidade} </p>
            <button onClick={() => handleRemoverItem(item.id)}><Delete /> </button>
          </Li>
        ))}
        Total: {calcularValorTotal()}
      </ul>
        <ButtonCadastro  onClick={handleLimparCarrinho}>
            Limpar Carrinho
        </ButtonCadastro>
        </BoxModal>
    </Modal>
   </>
  );
}