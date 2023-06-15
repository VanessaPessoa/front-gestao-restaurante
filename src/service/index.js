import api from "../api";

export function getRestaurante(page, totalPage, id) {
  const options = {
    method: "GET",
    url: `/restaurantes/${id}`,
    params: { includeData: page, pagination: totalPage },
  };

  return api.request(options);
}

export async function addPrato(data, toast) {
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
      toast.success("Não foi possível cadastrar o prato", {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.error(error);
    });
}
