const http = require("http");
const fs = require('fs');

const PORT = process.env.PORT || 5000;

const server = http.createServer(async (req, res) => {
    if (req.url === "/api/movies" && req.method === "GET") {
        const jsonData = fs.readFileSync('./data.json');
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(JSON.parse(jsonData)));
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});

server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});
