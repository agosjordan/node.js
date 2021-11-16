const express = require('express');
const mysql = require('mysql');
const PORT = process.env.PORT || 3000; //en este caso pirmero se ve si hay algun puerto determinado, y si no hay ninguno, una el 3000
// Arriba instanciamos modulos y librerias

const app = express ();
app.use(express.json()); //esto esta en la documentacion es para leer json

var connection = mysql.createConnection({
        host: 'www.cursophp.com.ar',
        user: 'root',
        password: 'fullstack',
        database: 'normalizacion',
        port: '3306'
}); //generamos los datos para la coneccion

//si llaman al directorio principal aparece esto
app.get('/', (req,res) => {
    res.send('Bienvenido al servidor Node + Mysql');
});

//si llaman al listado aparece esto
app.get('/listados', (req,res) => {
    res.send('Estas en el sector de listado');
});

//si llaman al consulta aparece esto. Ej: numero de socio.
app.get('/consultas/:nro', (req,res) => {
    const {nro} = req.params;  //esta es una ocion para tomar los datos ue vienen de los parametros
    console.log(nro)
    res.send('Estas en el sector de consultas');
});


app.listen(PORT, () => console.log('Servidor Up e puerto nro ${PORT}'));