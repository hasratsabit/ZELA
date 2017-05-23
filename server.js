const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const indexRoute = require("./server/routes/index");



const app = express();


// Database
mongoose.connect("mongodb://hasratsabit:1234@ds143141.mlab.com:43141/zela");
mongoose.Promise = global.Promise;

app.use(express.static(path.join("dist")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

// Main Route to endpoints
app.use("/", indexRoute);

app.use((req, res, next) => {
	const err = new Error("Not Found")
	err.status = 404;
	next(err);
})

const port = process.env.port || 3000;
app.listen(port, () => {
	console.log(`Started http server on ${port}`);
})
