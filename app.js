const express = require("express");
const http = require("http");
const cors = require("cors");

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('public')); // Serve static files from the public directory

const server = http.createServer(app);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // Serve the index.html file
});

server.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
});
