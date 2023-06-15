import { call, put, all, takeLatest } from "redux-saga/effects";
import * as actions from "./action";
import * as types from "../types";

import api from "../../../api";

function* loginRequest({ payload }) {
  try {
    var url = null;
    var perfil = ""

    if (payload.restaurante) {
      url = "restaurantes/login";
      perfil = "restaurante"
    } else {
      url = "clientes/login";
      perfil = "cliente"
    }

    var config = {
      method: "post",
      url: url,
      data: { nome: payload.data.nome, senha: payload.data.password },
    };
    
    const response = yield call(api, config);
    if (response.data.success) {
      yield put(actions.loginSuccess({ ...response.data.data }));
      window.location.href = `http://localhost:3000/`;
    }
  } catch (e) {
    yield put(actions.loginFailure());
  }
}

export default all([takeLatest(types.LOGIN_REQUEST, loginRequest)]);
