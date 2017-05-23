import {get} from "../services/service";

export const ServicesHttp = (function() {
	const getData = get("http://localhost:3000/training");
	getData.then((data) => {
			createHTML(data)
	});

	function createHTML(data) {
		data.map((newData) => {
			const container = document.getElementById("training-data");
			const htmlString = `<div class="training__content generic-content shrink">
								<h1>${newData.title} <strong>${newData.strong}</strong></h1>
								<p>${newData.description}</p>
								<a href="${newData.url}" class="btn btn--blue btn--medium btn--round">Watch Free Courses<i class="fa fa-play-circle-o" aria-hidden="true"></i></a>
							</div>
							<div class="training__code shrink">
								<img src="${newData.imagePath}" class="" alt="Coding">
							</div>`;
							container.insertAdjacentHTML("beforeend", htmlString);
		})
	}
}());
