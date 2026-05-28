const form = document.getElementById("myForm");

form.addEventListener("submit", function(event){

  // STOP PAGE REFRESH

  event.preventDefault();

  // INPUT VALUES

  const name =
  document.getElementById("name").value.trim();

  const email =
  document.getElementById("email").value.trim();

  const phone =
  document.getElementById("phone").value.trim();

  const password =
  document.getElementById("password").value.trim();

  const confirmPassword =
  document.getElementById("confirmPassword").value.trim();

  // ERROR ELEMENTS

  const nameError =
  document.getElementById("nameError");

  const emailError =
  document.getElementById("emailError");

  const phoneError =
  document.getElementById("phoneError");

  const passwordError =
  document.getElementById("passwordError");

  const confirmError =
  document.getElementById("confirmError");

  const successMessage =
  document.getElementById("successMessage");

  // CLEAR OLD ERRORS

  nameError.innerText = "";
  emailError.innerText = "";
  phoneError.innerText = "";
  passwordError.innerText = "";
  confirmError.innerText = "";
  successMessage.innerText = "";

  let isValid = true;

  // NAME VALIDATION

  if(name === ""){

    nameError.innerText =
    "Name is required";

    isValid = false;
  }

  // EMAIL VALIDATION

  const emailPattern =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(email === ""){

    emailError.innerText =
    "Email is required";

    isValid = false;
  }
  else if(!emailPattern.test(email)){

    emailError.innerText =
    "Enter valid email";

    isValid = false;
  }

  // PHONE VALIDATION

  const phonePattern =
  /^[0-9]{10}$/;

  if(phone === ""){

    phoneError.innerText =
    "Phone number is required";

    isValid = false;
  }
  else if(!phonePattern.test(phone)){

    phoneError.innerText =
    "Enter valid 10 digit number";

    isValid = false;
  }

  // PASSWORD VALIDATION

  const passwordPattern =
  /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}/;

  if(password === ""){

    passwordError.innerText =
    "Password is required";

    isValid = false;
  }
  else if(!passwordPattern.test(password)){

    passwordError.innerText =
    "Password must contain uppercase, lowercase, number, special character and minimum 8 characters";

    isValid = false;
  }

  // CONFIRM PASSWORD VALIDATION

  if(confirmPassword === ""){

    confirmError.innerText =
    "Confirm your password";

    isValid = false;
  }
  else if(password !== confirmPassword){

    confirmError.innerText =
    "Passwords do not match";

    isValid = false;
  }

  // DUPLICATE EMAIL CHECK

  let savedEmail =
localStorage.getItem("email");

if(savedEmail !== null){

  if(
    email.toLowerCase() ===
    savedEmail.toLowerCase()
  ){

    emailError.innerText =
    "Email already registered";

    isValid = false;
  }

}

  // DUPLICATE PHONE CHECK

  let savedPhone =
  localStorage.getItem("phone");

  if(phone === savedPhone){

    phoneError.innerText =
    "Phone number already registered";

    isValid = false;
  }

  // SUCCESS

  if(isValid){

    // SAVE DATA

    localStorage.setItem("email", email);

    localStorage.setItem("phone", phone);

    // SUCCESS MESSAGE

    successMessage.innerText =
    "Form Submitted Successfully 🎉";

    // RESET FORM

    form.reset();
  }

});


// PASSWORD TOGGLE

const togglePassword =
document.getElementById("togglePassword");

const passwordField =
document.getElementById("password");

togglePassword.addEventListener("click", function(){

  if(passwordField.type === "password"){

    passwordField.type = "text";

    togglePassword.classList.remove("fa-eye");

    togglePassword.classList.add("fa-eye-slash");
  }
  else{

    passwordField.type = "password";

    togglePassword.classList.remove("fa-eye-slash");

    togglePassword.classList.add("fa-eye");
  }

});


// CONFIRM PASSWORD TOGGLE

const toggleConfirmPassword =
document.getElementById("toggleConfirmPassword");

const confirmPasswordField =
document.getElementById("confirmPassword");

toggleConfirmPassword.addEventListener("click", function(){

  if(confirmPasswordField.type === "password"){

    confirmPasswordField.type = "text";

    toggleConfirmPassword.classList.remove("fa-eye");

    toggleConfirmPassword.classList.add("fa-eye-slash");
  }
  else{

    confirmPasswordField.type = "password";

    toggleConfirmPassword.classList.remove("fa-eye-slash");

    toggleConfirmPassword.classList.add("fa-eye");
  }

});