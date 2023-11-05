"use strict";

let uname = document.querySelector(".name");
let phno = document.querySelector(".phno");
let email = document.querySelector(".email");
let pwd = document.querySelector(".pwd");
let submit = document.querySelector(".login-btn");
let form = document.querySelector(".signup_form");
submit.addEventListener("click", () => {
  if (email.value != "") {
    let newuser = {
      name: uname.value,
      mobileno: phno.value,
      uid: email.value,
      password: pwd.value,
    };

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newuser);

    console.log(users);
    localStorage.setItem("users", JSON.stringify(users));
  } else alert("Check all the fields are correctly Filled");
});
