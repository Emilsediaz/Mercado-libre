const express = require ("express");
const app = express();
const port = process.env.PORT || 3000;
const start = ( )=>console.log ("Startin server...");
app.listen( port, start());
const path = require("path")
const public = path.join (__dirname, "../public");
const statics = express.static (public);
app.use(statics);

app.get("/", function(req, res){
    let file = path.join(__dirname, "views","home.html")
    res.sendFile(file);
})