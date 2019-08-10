
import { handleStatus, log } from './utils/promise-helpers.js';
import './utils/array-helpers.js';
import { notasService as Service } from './nota/service.js';
import { takeUntil } from './utils/operators.js';

const operation = takeUntil(3, () => {
    return Service
    .totalItens('2143')
    .then(console.log)
    .catch(console.log)
});

document.querySelector('#myButton').onclick = operation;