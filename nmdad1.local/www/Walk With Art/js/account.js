document.addEventListener("DOMContentLoaded", function(e) { 
	e.preventDefault();
  	if (localStorage.getItem('user') !== "") {
  		window.location = "index.html";
  	}
});

