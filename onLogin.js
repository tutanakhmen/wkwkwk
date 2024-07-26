let username = document.getElementById("username");
let password = document.getElementById("password");
let admin = document.getElementById("admin");
let user = document.getElementById("user");
let login = document.getElementById("login");
let logout = document.getElementById("logout");



function onLogin() {
  localStorage.setItem("username", username.value);

  if (username.value == "admin" && password.value == "root1234") {
    localStorage.setItem("role", "admin");
    username.style.display = "none";
    password.style.display = "none";
    user.style.display = "none";
    admin.style.display = "block";
  } else {
    localStorage.setItem("role", "user");
    username.style.display = "none";
    password.style.display = "none";
    admin.style.display = "none";
    user.style.display = "block";
  }

  if (localStorage.getItem("username")) {
    username.style.display = "none";
    password.style.display = "none";
    login.style.display = "none";
    logout.style.display = "block"
    if (localStorage.getItem("role") == admin) {
      user.style.display = "none";
      admin.style.display = "block";
    } else {
      admin.style.display = "none";
      user.style.display = "block";
    }
  }
}


function onLogout () {
  localStorage.clear()
  location.reload()
}