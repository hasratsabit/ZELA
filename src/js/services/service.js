export const get = function(url) {
	return new Promise((resolve, reject) => {
		const http = new XMLHttpRequest();
		http.open("GET", url, true);
		http.onload = function() {
			if(http.status == 200){
				resolve(JSON.parse(http.response));
			}else{
				reject(http.statusText);
			}
		};
		http.onerror = function(){
			reject(http.statusText)
		};
		http.send();
	})
}
