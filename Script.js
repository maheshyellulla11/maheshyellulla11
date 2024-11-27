function validateForm() {
  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const PhoneNo = document.getElementById("PhoneNo").value;
  var password = document.getElementById("password"),
  confirm_password = document.getElementById("confirm_password");
  
  const fullnameError = document.getElementById("fullname-error");
  
  const emailError = document.getElementById(
      "email-error"
  );
  const PhoneNoError = document.getElementById(
      "PhoneNo-error"
  );
  const passwordError = document.getElementById(
      "password-error"
      );
  fullnameError.textContent = "";
  emailError.textContent = "";
  PhoneNoError.textContent = "";
  passwordError.textContent = "";
  let isValid = true;

  if (fullname === "" || /\d/.test(fullname)) {
      nameError.textContent =
          "Please enter your name properly.";
      isValid = false;
  }
  if (email === "" || !email.includes("@")) {
      emailError.textContent =
          "Please enter a valid email address.";
      isValid = false;
  }
  if (PhoneNo === "" || /\d/var n=new Number(value)) {
    PhoneNoError.textContent =
        "Please enter your PhoneNo properly.";
    isValid = false;
  }
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}
password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;