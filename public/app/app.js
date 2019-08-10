
import { handleStatus, log } from './utils/promise-helpers.js';
import './utils/array-helpers.js';
import { notasService as Service } from './nota/service.js';
import { takeUntil, debounceTime } from './utils/operators.js';

const acc = takeUntil(3, () => 
    Service
    .totalItens('2143')
    .then(console.log)
    .catch(console.log)
);

const action = debounceTime(500, acc);

document.querySelector('#myButton').onclick = action;