import { call, put, all, takeLatest } from "redux-saga/effects";
import * as actions from "./action";
import * as types from "../types";
import { toast } from 'react-toastify';

import api from "../../../api";

function* loginRequest({ payload }) {
  try {
    var url = null;
    const data = {};
    if (payload.restaurante) {
      url = "restaurantes/login";
      data.nome = payload.data.nome;
      data.senha = payload.data.password ;
    } else {
      url = "clientes/login";
      data.name = payload.data.nome;
      data.password = payload.data.password ;
    }

    var config = {
      method: "post",
      url: url,
      data: data,
    };

    const response = yield call(api, config);
    if (response.data.success) {
      yield put(actions.loginSuccess({ ...response.data.data }));
      window.location.href = `http://localhost:3000/`;
    } else {
      toast.error("Não foi possível realizar o login", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  } catch (e) {
    console.log("nao foi possivel")
    toast.error("Não foi possível realizar o login", {
      position: toast.POSITION.TOP_RIGHT,
    });
    yield put(actions.loginFailure());
  }
}

export default all([takeLatest(types.LOGIN_REQUEST, loginRequest)]);
