const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TrainingSchema = new Schema({
	title: {type: String, required: true},
	strong: {type: String, required: true},
	description: {type: String, required: true},
	url: {type: String, required: true},
	imagePath: {type: String, required: true}
});

const Training = mongoose.model("training", TrainingSchema);

module.exports = Training;
