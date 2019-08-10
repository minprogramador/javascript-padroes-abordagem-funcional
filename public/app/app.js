
import { handleStatus, log } from './utils/promise-helpers.js';
import './utils/array-helpers.js';
import { notasService as Service } from './nota/service.js';

document
.querySelector('#myButton')
.onclick = () => 
    Service
    .totalItens('2143')
    .then(console.log)
    .catch(console.log)