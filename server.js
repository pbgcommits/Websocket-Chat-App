const WebSocket = require('websocket').server;
const http = require('http');

const server = http.createServer((request, response) => {

});

const webSocketServer = new WebSocket({
    httpServer: server,
});

webSocketServer.on('request', (request) => {
    const connection = request.accept(null, request.origin);

    connection.on('messsage', (message) => {
        console.log(message);
    });

    connection.on('close', (reasonCode, description) => {

    });
});

export const port = 3001;

server.listen(port, () => {
    console.log('WebSocket server is listening on port ' + port);
})