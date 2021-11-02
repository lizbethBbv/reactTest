const express = require("express");
const pool = require("./db");
const app = express();
const PORT = 5000;

app.listen(5000, () => {
    console.log(`Server started on port ${PORT}`);
    // Se prueba un query antes para ver si funciona el pool
    pool.query('SELECT 1 + 1 AS solution').then(() => {
        console.log('Base de datos inicializada correctamente');
    });
});

app.get('/', function(req, res){
    res.send('Hello from backend')
})