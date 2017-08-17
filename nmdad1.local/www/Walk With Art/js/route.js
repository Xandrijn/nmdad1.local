document.addEventListener("DOMContentLoaded", function(event) { 
 	document.getElementById("Walk1").addEventListener("click", function(event) {
		localStorage.setItem('route', 'walk1');
		window.location = "walk.html";
	});

	document.getElementById("Walk2").addEventListener("click", function(event) {
		localStorage.setItem('route', 'walk2');
		window.location = "walk.html";
	});

	document.getElementById("Walk3").addEventListener("click", function(event) {
		localStorage.setItem('route', 'walk3');
		window.location = "walk.html";
	});
});

