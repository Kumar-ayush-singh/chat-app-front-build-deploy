const helmet = require("helmet");
const xss = require("xss-clean");
const cors = require("cors");
const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(helmet({
    contentSecurityPolicy: false,
}));
app.use(xss());
app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));

app.use(function (req, res){
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}....`);
})