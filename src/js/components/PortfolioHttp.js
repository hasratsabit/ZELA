import {get} from "../services/service";

export const ServicesHttp = (function() {
	const getData = get("http://localhost:3000/portfolio");
	getData.then((data) => {
		createHTML(data);
	});

	function createHTML(data) {
		const container = document.getElementById("portfolio-data");
		data.map((newData) => {
			const htmlString = `<div class="row__col-3">
				<div class="portfolio flip-in">
					<div class="portfolio__image">
						<img src="${newData.imagePath}" alt="">
					</div>
					<div class="portfolio__content">
						<div class="portfolio__source-links">
							<a href="${newData.url}"><i class="fa fa-link" aria-hidden="true"></i></a>
						</div>
						<h2>${newData.title}</h2>
						<div  class="portfolio__tech">
							<a id="tags" href="#">${newData.tags}</a>
						</div>
					</div>
				</div>
			</div>`

			container.insertAdjacentHTML("beforeend", htmlString);
		})
	}
}());
