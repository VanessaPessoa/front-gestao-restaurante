import { apiAvaliation, apiProducts, apiSupermaket } from "../api";

export function addProduct(payload){
    const params = {
        headers: {
            "accept": "*/*",
            "Content-Type": "application/json"
        }
    }

    return apiProducts.post("produto", payload, params )
}

export function getProducts(page, city) {
    if(city > 0){
        return apiProducts.get(`produto/?page=${page}&idCidade=${city}`);
    }
}

export function getProductsIdMercado(page, idMercado) {
    if(idMercado > 0){
        return apiProducts.get(`produto/?page=${page}&idUnidadeMercado=${idMercado}`);
    }
}

export function getProductId(id, idMercado) {
    return apiProducts.get(`produto/${id}?idUnidadeMercado=${idMercado}`)
}

export function getSupermakets(page, city) {
    if (city > 0) {
        return apiSupermaket.get(`unidade-empresa?idCidade=${city}&page=${page}`);
    }
}

export function getCitys(value) {
    if (value?.length > 0) {
        return apiSupermaket.get(`/localizacao/cidade?nome=${value}`);
    }
    return apiSupermaket.get(`/localizacao/cidade`);
}

export function getSupermarketUnit(idCity, value) {
    if (value?.length > 0) {
        return apiSupermaket.get(`unidade-empresa?idCidade=${idCity}&nome=${value}`);
    }
    return apiSupermaket.get(`unidade-empresa?idCidade=${idCity}`);
}


export function classifyPrice(tipoAvaliacao, idPreco){
    const id = Math.floor(Math.random() * 1000);
    const payload ={
        params: {
            'idUsuario': id,
            'idPreco': idPreco,
            'tipoAvaliacao': tipoAvaliacao
        },
        headers: {
            'accept': '*/*',
            'content-type': 'application/x-www-form-urlencoded'
        }
    }
     return apiAvaliation.post('avaliacao', '', payload);
}

export function updatePrice(valor, idProduto, idUnidadeEmpresa){
    const payload ={
        params: {
            'valor': valor,
            'idProduto': idProduto,
            'idUnidadeEmpresa': idUnidadeEmpresa
        },
        headers: {
            'accept': '*/*',
            'content-type': 'application/x-www-form-urlencoded'
        }
    }
    return apiProducts.post("preco", '', payload);
}

export function getPriceHistory(page, idUnidadeEmpresa, idProduto ){
    const payload = {
        params: {
            'idProduto': idProduto,
            'idUnidadeEmpresa': idUnidadeEmpresa,
            'page': page
        },
        headers: {
            'accept': '*/*'
        }
    }

    return apiProducts.get("/preco/historico", payload);
}

export function getSupermaketId(id){
    return apiSupermaket.get(`unidade-empresa/${id}`);
}

export function getEmpresa(idCity){
    return apiSupermaket.get(`/empresa?idCidade=${idCity}&page=1`)
}

export function addEmpresa(data){
    return apiSupermaket.post("empresa", data, {"headers": {'accept': '*/*'}})
}

export function addNewSupermarket(data){
    console.log(data)
    return apiSupermaket.post("unidade-empresa", data, { headers: {
        'accept': '*/*',
        'content-type': 'application/json'
    }})
}