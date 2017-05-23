const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PortfolioSchema = new Schema({
	imagePath: {type: String, required: true},
	title: {type: String, required: true},
	url: {type: String, required: true},
	tags: {type: String, required: true}
})

const Portfolio = mongoose.model("portfolio", PortfolioSchema);
module.exports = Portfolio;
