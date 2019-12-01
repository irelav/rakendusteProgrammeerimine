/* Don't need .env for Heroku */
if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}

const express = require('express')
const app = express()
const path = require("path");
const apiRouter = require("./apiRouter.js");
//require('dotenv').config();
const database = require("./database.js");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(apiRouter);

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
})

app.get('/items/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
})

/** For images and bundle.js */
app.use("/static", express.static("dist/static"));

/** For index.html */
app.use("/*", express.static("dist"));

function listen(){
    app.listen(process.env.PORT || PORT, () => {
        console.log("Server started", PORT);
        console.log(`http://localhost:${PORT}`)
    });
}

database.connect()
    .then(() => {
        listen();
    })
    .catch(err => {
        console.log("Error on database connection: ", err);
    });





 
