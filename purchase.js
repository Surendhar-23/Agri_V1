let currentuser = JSON.parse(localStorage.getItem("currentuser")) || [
  { name: "Guest" },
];

let username = document.querySelector(".username");
let logoption = document.querySelector(".login-option");
username.textContent = currentuser.name;

{
  if (localStorage.getItem("currentuser"))
    logoption.innerHTML = `<a onclick="logoutaccount()">logout</a>`;
}

let logoutaccount = function () {
  localStorage.removeItem("Currentuser");
  logoption.innerHTML = `<a href="./login.html">Login</a>`;
  username.textContent = "Guest";
  currentuser = {};
};
