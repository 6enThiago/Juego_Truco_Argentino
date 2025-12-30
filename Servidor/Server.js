const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

console.log("--- INICIANDO SERVIDOR DE TRUCO ---");

io.on('connection', (socket) => {
    // Esto se ejecuta cuando alguien abre el juego
    console.log('¡NUEVO JUGADOR CONECTADO! ID:', socket.id);

    socket.on('disconnect', () => {
        console.log('Jugador desconectado:', socket.id);
    });
});

server.listen(3000, () => {
    console.log('Escuchando en puerto 3000 (Listo para jugar)');
});