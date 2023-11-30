document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("id_userLoginId");
  const passwordInput = document.getElementById("id_password");
  const emailError = document.getElementById("error_message_userLoginId");
  const passwordError = document.getElementById("error_message_password");

  emailInput.addEventListener("focus", function () {
    emailError.style.display = "block";
  });
  emailInput.addEventListener("blur", function () {
    emailError.style.display = "none";
  });

  passwordInput.addEventListener("focus", function () {
    passwordError.style.display = "block";
  });
  passwordInput.addEventListener("blur", function () {
    passwordError.style.display = "none";
  });
});
