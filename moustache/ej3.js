const express = require("express"); //se instancian los modulos
const mustache = require('mustache-express');
const path = require('path');//modulo q ya viene con node tambien viene con version externa

const app = express();//se necesita ejecutar express se ve en la pag de npm
const puerto = 5000; //se define el puerto


//mustache no ejecuta archivos html, osea sirve para renderizar archivos, pero normalmente una de las funciones q tiene es generar una extension en el nombre del archivo
app.engine('.hbs', mustache());//se le indica a mustache que los archivps vana ser extension .hbs caundo se inicie el mustache
//indico a express cuales son los archivos a ejecutar cuando le solicito un renderizado (renderizar es agarrar la pag y devolverla al navegador)
app.set('view engine', 'hbs');
//ahora le indicamos a express que cuando venga una peticion get a la pagina principal ('/'), ejecuta lo q venga entre las llaver
app.get('/',(req,res) =>{

        const datos = [
            {nombre: 'juan', edad: 15},
            {nombre: 'maria', edad: 25}

        ];

        res.render('index',
            {
                titulo: 'Mi primer Mustache',
                nombre: 'Nodejs',
                info: datos
            }
        
        ); //va a ser index.hbs como definimos arriba
    }
);

//en la documentacion de mustache, te aclara que hay q crear carpeta views, con el archivo renderizado

app.listen(puerto);