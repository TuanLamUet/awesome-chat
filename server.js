const express = require('express');
const app = express();

const hostname ="localhost";
const port = 8017;
app.get('/helloworld', (req, res) => {
    res.send("<h1>Hello World</h1>");
});

app.listen(port, hostname, ()=> {
    console.log(`server is running...${hostname}:${port}`);
});
