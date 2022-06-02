// let inbtn = (document.getElementById("login").onclick = function () {
//   let username = document.getElementById("username").value;
//   let password = document.getElementById("password").value;

//   if (username == "samir" && password == "111") {
//     alert("Log in has been succesfully done!");
//   } else {
//     alert("Password or Username is wrong!");
//   }
//   if (localStorage.getItem("user") == null) {
//     localStorage.setItem("user", JSON.stringify([]));
//   }
//   let arr = JSON.parse(localStorage.getItem("user"));

//   if (localStorage.getItem("dbUser") == null) {
//     localStorage.setItem("dbUser", JSON.stringify([]));
//   }
//   let dbArr = JSON.parse(localStorage.getItem("dbUser"));
//   if (signUpEmail.value != "") {
//     alert("S");
//     arr.push({
//       Name: username.value,
//       Password: password.value,
//     });
//     localStorage.setItem("user", JSON.stringify(arr));
//     dbArr.push({
//       Name: username.value,
//       Password: password.value,
//     });
//     localStorage.setItem("dbUser", JSON.stringify(arr));
//   }
// });
let username = document.getElementById("username");
let password = document.getElementById("password");
let login = document.getElementById("login");
let logout = document.getElementById("logout");
let check = document.getElementById("check");

var c = console.log.bind(document);

if (localStorage.getItem("dbUser") == null) {
  localStorage.setItem("dbUser", JSON.stringify([]));
}

let users = JSON.parse(localStorage.getItem("dbUser"));

loginMenu();

login.addEventListener("click", function () {
  if (users.length > 0) {
    let usernameControl = users.find((us) => us.username == username.value);
    let passwordControl = false;

    if (usernameControl != null) {
      username.value == usernameControl.username;
      passwordControl =
        usernameControl.password == password.value ? true : false;

      if (passwordControl == true) {
        if (remember.checked == true) {
          localStorage.setItem(
            "username",
            JSON.stringify(usernameControl.username)
          );
          localStorage.setItem(
            "password",
            JSON.stringify(usernameControl.password)
          );
        }
        if (remember.checked == false) {
          localStorage.setItem("username", JSON.stringify(""));
          localStorage.setItem("password", JSON.stringify(""));
        }
        wellcomeMenu(username.value);
      } else {
        alert("password wrong");
      }
    } else {
      alert("username wrong");
    }
  } else {
    alert("App doesnt have any user yet");
  }
});
logout.addEventListener("click", function () {
  loginMenu();
});

function loginMenu() {
  if (localStorage.getItem("username") == null) {
    localStorage.setItem("username", JSON.stringify(""));
  }
  if (localStorage.getItem("password") == null) {
    localStorage.setItem("password", JSON.stringify(""));
  }

  if (localStorage.getItem("username") != null) {
    username.value = JSON.parse(localStorage.getItem("username"));
    password.value = JSON.parse(localStorage.getItem("password"));
  }
}
