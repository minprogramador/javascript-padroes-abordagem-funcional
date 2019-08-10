import { handleStatus } from '../utils/promise-helpers.js';
import { partialize } from '../utils/operators.js';

const API = 'http://localhost:3000/notas';

const getItensPorNotas = notas => notas.$flatMap(nota => nota.itens);
const filtraItensPorCodigo = (code, items) => items.filter(item => item.codigo === code);
const totalItens = items => items.reduce( (total, item) => total + item.valor, 0 );

export const notasService = {

    listAll() {
        return  fetch(API)
                .then(handleStatus)
                .catch(err => {
                    console.log(err);
                    return Promise.reject('Não foi possível obter as notas fiscais');
                });
    },

    totalItens(code) {
        const filtroItens = partialize(filtraItensPorCodigo, code);
        return this.listAll()
            .then( notas => {
                return totalItens(
                    filtroItens(
                        getItensPorNotas(notas)
                    )
                )
            });
    }

};