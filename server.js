const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Server is running!");
    });
    const port = 3000;
    server.listen(port, () => {
        console.log("Server is listening on port " + port);
        });
        
const io = require("socket.io");
// const ioServer = io.listen(server)
const ioServer = require("socket.io")(port + 1);
ioServer.on('connection', (socket) => { console.log("New client connected!") });