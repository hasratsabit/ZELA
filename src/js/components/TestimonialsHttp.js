import {get} from "../services/service";

export const TestimonialsHttp = (function() {
	const getData = get("http://localhost:3000/testimonials");
	getData.then((data) => {
		createHTML(data);
	});

	function createHTML(data) {
		const container = document.getElementById("testify-data");
		data.map((newData) => {
			const htmlString = `<div class="row__col-4">
				<div class="testimonials expand">
					<div class="testimonials__image">
						<img src="${newData.imagePath}" alt="">
					</div>
					<div class="testimonials__content">
						<h2>${newData.name}</h2>
						<p><q cite="">${newData.comment}</q></p>
					</div>
				</div>
			</div>`

			container.insertAdjacentHTML("beforeend", htmlString);
		})
	}
}());
