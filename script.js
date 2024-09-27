document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("please fill all fields");
      return;
    }

    if (password != confirmPassword) {
      alert("Password do not match");
      return;
    }

    alert("Successfully Created Account");
    document.getElementById("signup-form").reset();
  });
