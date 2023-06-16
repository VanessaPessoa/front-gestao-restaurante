import api from "../api";
import { toast } from 'react-toastify';

export function getRestaurante(page, totalPage, id) {
  const options = {
    method: "GET",
    url: `/restaurantes/${id}`,
    params: { includeData: page, pagination: totalPage },
  };

  return api.request(options);
}

export function getAllRestaurante() {
  const options = {
    method: "GET",
    url: `/restaurantes`,
    params: { includeData: 1, pagination: 0 },
  };

  return api.request(options);
}

export function getAllEndereco(id) {
  const options = {
    method: "GET",
    url: `/clientes/${id}`,
    params: { includeData: 1, pagination: 0 },
  };

  return api.request(options);
}


export async function addPrato(data) {
  const options = {
    method: "POST",
    url: "/pratos",
    data,
  };

  api
    .request(options)
    .then(function (response) {
      toast.success("Prato cadastrado com sucesso", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(function () {
        window.location.reload(true);
      }, 1000);
    })
    .catch(function (error) {
      toast.error("Não foi possível realizar o cadastro", {
        position: toast.POSITION.TOP_RIGHT,
      });
    });
}

export async function editPrato(data, id) {
  console.log(id)
  const options = {
    method: "PUT",
    url: `/pratos/${id}`,
    data,
  };

  api
    .request(options)
    .then(function () {
      toast.success("Prato editado com sucesso", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(function () {
        window.location.reload(true);
      }, 1000);
    })
    .catch(function (error) {
      toast.error("Não foi possível editar o prato", {
        position: toast.POSITION.TOP_RIGHT,
      });
    });
}

export function addClient(data){

  const options = {
    method: "POST",
    url: "/clientes",
    data,
  };

  api
    .request(options)
    .then(function () {
      toast.success("Cadastro realizado", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(function () {
        window.location.href = `http://localhost:3000/`;
      }, 1000);
    })
    .catch(function () {
      toast.error("Não foi possível realizar o cadastro", {
        position: toast.POSITION.TOP_RIGHT,
      });
    });
}

export function addRestaurante(data){

  const options = {
    method: "POST",
    url: "/restaurantes",
    data,
  };

  api
    .request(options)
    .then(function () {
      toast.success("Cadastro realizado", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(function () {
        window.location.href = `http://localhost:3000/`;
      }, 1000);
    })
    .catch(function () {
      toast.error("Não foi possível realizar o cadastro", {
        position: toast.POSITION.TOP_RIGHT,
      });
    });
}

export async function addEndereco(data) {
  const options = {
    method: "POST",
    url: "/enderecos",
    data
  };

  api
    .request(options)
    .then(function (response) {
      toast.success("Endereço cadastrado com sucesso", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(function () {
        window.location.reload(true);
      }, 1000);
    })
    .catch(function (error) {
      toast.error("Não foi possível realizar o cadastro", {
        position: toast.POSITION.TOP_RIGHT,
      });
    });
}


export async function addPedido(carrinho, identificador, idUser, total) {
  
  if(!identificador){
    toast.error("Informe o endereço")
  }
  
  const itens = [] 
  carrinho.forEach(element => {
    itens.push({
      pratoId: element.pratoId,
      quantidade: element.quantidade
    })
  })

  const options = {
    method: "POST",
    url: "/pedidos",
    data: {
      clienteId: idUser,
      enderecoClienteId: identificador,
      valor: total,
      itens
    }
  };

  api
    .request(options)
    .then(function (response) {
      toast.success("Pedido realizado com sucesso", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(function () {
        window.location.href = `http://localhost:3000/`;
      }, 1000);
    })
    .catch(function (error) {
      toast.error("Não foi possível realizar o pedido", {
        position: toast.POSITION.TOP_RIGHT,
      });
    });
}