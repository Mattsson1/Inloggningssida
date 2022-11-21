function ShowPasswordFunction() {
  var x = document.getElementById("PasswordInput");
  var i = document.getElementById("PasswordInput2");
  if (x.type && i.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function Register() {
  //Sparade inputs variabler
  var EmailInput = document.getElementById("EmailInput").value;
  var UserNameInput = document.getElementById("UserNameInput").value;
  var PasswordInput = document.getElementById("PasswordInput").value;

  localStorage.setItem("UserEmail", EmailInput);
  localStorage.setItem("UserName", UserNameInput);
  localStorage.setItem("UserPassword", PasswordInput);

  /*var user = {
    email: email,
    username: username,
    password: pass,
  };

  var json = JSON.stringify(user);
  localStorage.setItem(username, json);
  console.log("user added");
  */
}
