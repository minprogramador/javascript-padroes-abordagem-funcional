import { handleStatus } from '../utils/promise-helpers.js';

const API = 'http://localhost:3000/notas';

const contaItens = (code) => {
    return notas => notas
    .$flatMap(nota => nota.itens)
    .filter(item => item.codigo == code)
    .reduce( (total, item) => total + item.valor, 0 );

};

export const notasService = {

    listAll() {
        return fetch(API).then(handleStatus);
    },

    totalItens(code) {
        return this.listAll().then(contaItens(code));
    }

};