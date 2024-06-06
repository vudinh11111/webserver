const express = require("express");
const http = require("http");
const cors = require("cors");


const PORT = 3000;
const app = express();

app.use(express.json());
app.use(cors());



const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send("Hello World");
});


server.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
});
