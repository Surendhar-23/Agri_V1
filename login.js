"use strict";

// let users = [
//   { uid: "surendhar23", password: "123456", name: "surendhar N D" },
//   { uid: "suresh", password: "123456", name: "Suresh" },
//   { uid: "arun10", password: "123456", name: "Arun" },
// ];

let users = JSON.parse(localStorage.getItem("users")) || [];

let uid = document.querySelector(".userid");
let pwd = document.querySelector(".pwd");
let form = document.querySelector(".login_form");
let submit = document.querySelector(".login-btn");
let logmsg = document.querySelector(".login-msg");

submit.addEventListener("click", () => {
  console.log("click");
  let uidval = uid.value;
  let pwdval = pwd.value;
  let found = false;
  users.forEach((e) => {
    if (e.uid == uidval) {
      found = true;
      if (e.password == pwdval) {
        localStorage.setItem("currentuser", JSON.stringify(e));
        console.log(e);
        alert("Login Successfully..!");
        form.action = "purchase.html";
      } else {
        alert("Please Check your Password");
      }
    }
  });
  if (!found) alert("Please Check Your UserId and Password");
});
