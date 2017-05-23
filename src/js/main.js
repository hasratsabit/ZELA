import "../css/styles.scss";
import $ from "jquery";


import "./modules/RevealHero";
import "./modules/RevealElements";
import "./modules/ScrollEffect";
import "./modules/MobileMenu";

// import "./services/service";
// import "./components/TestimonialsHttp";
// import "./components/ServicesHttp";
// import "./components/PortfolioHttp";
// import "./components/TrainingHttp";


var header = $(".header");
var hero = $(".hero");
var headerHeight = header.outerHeight();
var heroItem = hero.find("a");

heroItem.click(function(e) {
	var href = $(this).attr("href");
	var offsetTop = href === "#" ? 0 : $(href).offset().top - headerHeight + 1;
	$("html, body").stop().animate({
		scrollTop: offsetTop
	}, 300);
	e.preventDefault();
});
