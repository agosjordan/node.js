var http = require("http");
 
var mensajes = function(pepito, respuesta){
    respuesta.writeHead(200, {"Content-Type": "text/html; charset=utf-8"} );
    respuesta.write("Hola1" +"<BR>");    
    respuesta.write("Hola2" +"<BR>");
    alert("Prueba");
    respuesta.end("cierro la comunicación Ñandú");
};
 
var servidor = http.createServer(mensajes);
servidor.listen(4000);
