import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Delete, ShoppingCart } from '@mui/icons-material';
import { Button, Modal, Badge } from '@mui/material';

import {limparCarrinho, removeItem} from "../../store/modules/carrinho/action";
import EnderecoSelect from '../EnderecoSelect';
import { addPedido } from '../../service';

import { BoxModal, Li, ButtonCadastro, ButtonLimpar, Total } from "./styles";
import 'react-toastify/dist/ReactToastify.css';


export default function Carrinho() {
    const carrinho = useSelector(state => state.carrinho);
    const [count, setCount] = useState(0)
    const [identificador, setIdentificador] = useState()
    const idUser = useSelector((state) => state.auth.user.id);

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

      const handlePedido = () => {
        addPedido(carrinho, identificador, idUser, calcularValorTotal() )
      };
  return (
   <>
   <ToastContainer />
    <Button onClick={handleOpen}>
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
          <Li key={item.pratoId}>
            <p className='div1'>Nome: {item.name}</p>
            <p className='div2'>Preço: R${item.price}</p>
            <p className='div3'>Quantidade: {item.quantidade} </p>
            <button className='div4' onClick={() => handleRemoverItem(item.id)}><Delete /> </button>
          </Li>
        ))}
        </ul>
       
        <Total> Total: R${calcularValorTotal()} </Total>
        <EnderecoSelect setIdentificador={setIdentificador} identificador={identificador}/>

        <ButtonCadastro  onClick={handlePedido}>
            Fazer o Pedido
        </ButtonCadastro>
        <ButtonLimpar  onClick={handleLimparCarrinho}>
            Limpar Carrinho
        </ButtonLimpar>
        </BoxModal>
    </Modal>
   </>
  );
}