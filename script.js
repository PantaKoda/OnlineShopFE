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

//Sign In

document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost:8000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  });
