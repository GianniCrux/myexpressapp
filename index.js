const express = require('express');

const app = new express();

const port = 8080;

app.get("/", (req, res) => {7
    return res.send("hello devs");
});

app.listen(port, () => {
    console.log("Listening at http://localhost:" + port);
});