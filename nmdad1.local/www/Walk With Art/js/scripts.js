document.addEventListener("DOMContentLoaded", function(event) { 
  if (localStorage.getItem('user') === "") {
    window.location = "login.html";
  }
});

function Logout() {
    localStorage.setItem('user', "");
    window.location = "login.html";
};