const express = require("express");
const app= express();
const path = require("path");
const carpetaPublica = path.resolve(__dirname, "public");
app.use(express.static(carpetaPublica));
app.listen(4000, () => console.log("servidor corriendo"));
app.get("/", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "views/home.html"));
})