let inbtn = (document.getElementById("login").onclick = function () {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username == "samir" && password == "111") {
    alert("Log in has been succesfully done!");
  } else {
    alert("Password or Username is wrong!");
  }
  if (localStorage.getItem("user") == null) {
    localStorage.setItem("user", JSON.stringify([]));
  }
  let arr = JSON.parse(localStorage.getItem("user"));

  if (localStorage.getItem("dbUser") == null) {
    localStorage.setItem("dbUser", JSON.stringify([]));
  }
  let dbArr = JSON.parse(localStorage.getItem("dbUser"));
  if (signUpEmail.value != "") {
    alert("S");
    arr.push({
      Name: username.value,
      Password: password.value,
    });
    localStorage.setItem("user", JSON.stringify(arr));
    dbArr.push({
      Name: username.value,
      Password: password.value,
    });
    localStorage.setItem("dbUser", JSON.stringify(arr));
  }
});
