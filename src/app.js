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

/*
const { v4: uuidv4 } = require('uuid');
console.log(uuidv4());
console.log('panete santo');
*/

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('This is a GET request');    
});

app.post('/', (req, res) => {
    res.send('This is a POST request');    
});

app.listen(PORT, () => {
    console.log('App listening on port ' + PORT);
});