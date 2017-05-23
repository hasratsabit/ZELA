const Portfolio = require("../models/portfolio");
const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
	Portfolio.find({}, (err, data) => {
		if(err){
			throw err;
		}else {
			res.json(data)
		}
	});
});

router.post("/", (req, res) => {
	const port = new Portfolio();
	port.imagePath = req.body.imagePath;
	port.title = req.body.title;
	port.url = req.body.url;
	port.tags = req.body.tags;

	port.save((err, data) => {
		if(err){
			throw err;
		}else {
			res.json(data);
		}
	})
})

module.exports = router;
