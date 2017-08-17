function validate(){
	var username = document.getElementById("name").value;
	var password = document.getElementById("password").value;
	if (username == "Roelof" && password == "Roelof123"){
		localStorage.setItem('user', username);
		window.location = "index.html"; // Redirecting to other page.
		return false;
	}
	else {
		document.getElementById("errorMessage").innerHTML = "<p>Foutieve login</p>";
	}
}
