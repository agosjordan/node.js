var http = require("http"), fs = require("fs");

const miServidor = "localhost";
const puerto = 4000;
var mihtml = fs.readFileSync("mihtml.html");

console.log("servidor iniciado");

http.createServer(
    function(req, res){
        console.log("llamada del cliente"); 
        res.write(mihtml);
        res.end();
        console.log("finalizacion repsuesta");
    }   
).listen(puerto,miServidor,()=>{
    console.log("Mi servidor");
});