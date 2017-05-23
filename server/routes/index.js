const express = require("express");
const router = express.Router();

const TestifyRoute = require("./testimonials");
const ServiceRoute = require("./services");
const PortfolioRoute = require("./portfolio");
const TrainingRoute = require("./training");


router.get("/", (req, res) => {
	res.render("index", {title: "ZELA"});
});

router.use("/services", ServiceRoute);
router.use("/testimonials", TestifyRoute);
router.use("/portfolio", PortfolioRoute);
router.use("/training", TrainingRoute);

module.exports = router;
