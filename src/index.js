const express = require("express");
const app = express();
const path = require("path");

//settings
app.set("port", 4000)
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//routers
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/contacto", (req, res) => {
    res.render("contacto");
});

//static files
app.use(express.static(path.join(__dirname, "public")));



app.listen(app.get("port"), () => {
    console.log("server on port", app.get("port"));
});