const app = require('./app');//<--se crea un protocolo de transferencia
const http = require('http');
const server = http.createServer(app);


server.listen(3000, ()=>{
    console.log('El servidor está corriendo')
})