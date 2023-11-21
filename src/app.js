/*
// Importación sencilla
const uuid = require('uuid');
console.log(uuid.v4());
*/

/*
// importación tipo ES6
// necesitamos declarar "type": "module" en package.json
import { v4 as uuidv4 } from 'uuid';
console.log(uuidv4());
*/

const { v4: uuidv4 } = require('uuid');
console.log(uuidv4());