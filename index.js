const express = require("express");

require("./bot");

const app = express();

app.use(express.static("web"));

app.get("/", (req, res) => {
    res.send("PLAY GAMER GO ONLINE!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor online na porta " + PORT);
});
