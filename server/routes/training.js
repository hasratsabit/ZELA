const Training = require("../models/training");
const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
	Training.find((err, data) => {
		if(err){
			throw err;
		}else {
			res.json(data);
		}
	});
});

router.post("/", (req, res) => {
	const training = new Training();
	training.title = req.body.title;
	training.strong = req.body.strong;
	training.description = req.body.description;
	training.url = req.body.url;
	training.imagePath = req.body.imagePath;

	training.save((err, data) => {
		if(err){
			throw err;
		}else {
			res.json(data);
		}
	});
});

module.exports = router;
