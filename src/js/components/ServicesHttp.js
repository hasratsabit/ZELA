import {get} from "../services/service";

export const ServicesHttp = (function() {
	const getData = get("http://localhost:3000/services");
	getData.then((data) => {
		createHTML(data);
	});

	function createHTML(data) {
		const container = document.getElementById("services-data");
		data.map((newData) => {
			const htmlString = `<div class="row__col-4">
				<div class="services fade-in">
					<a href="#"><i class="${newData.icon}" aria-hidden="true"></i></a>
					<div class="services__content">
						<h2>${newData.title}</h2>
						<p>${newData.content}</p>
					</div>
				</div>
			</div>`

			container.insertAdjacentHTML("beforeend", htmlString);
		})
	}
}());
