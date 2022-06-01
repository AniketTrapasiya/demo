const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = "";

  //convert empty fields to an empty string so we can use validator functions

  data.firstname = !isEmpty(data.firstname) ? data.firstname : "";
  data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";
  data.fileName = !isEmpty(data.fileName) ? data.fileName : "";

  // //Name checks
  if (Validator.isEmpty(data.firstname)) {
    errors += "Firstname is required. ";
  }
  if (Validator.isEmpty(data.lastname)) {
    errors += "Lastname is required. ";
  }

  //Email checks
  if (Validator.isEmpty(data.email)) {
    errors += "Email is required. !";
  }

  //Password checks
  if (Validator.isEmpty(data.password)) {
    errors += "Password is required. !";
  }

  if (Validator.isEmpty(data.password2)) {
    errors += "Confirm Password is required. !";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors += "Password must be atleast 6 Character long. ";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors += "Passwords and Confirm password does not match. ";
  }

  if (Validator.isEmpty(data.phone)) {
    errors += "Phone Number is required. ";
  }

  if (data.phone.length != 10) {
    errors += "Phone Number should contains 10 digits. ";
  }

  // if(Validator.isEmpty(data.fileName)){
  //     errors.fileName = "File is required. !"
  // }

  // if(Validator.equals(data.fileName, "No file chosen")){
  //     errors.fileName = "File is required. !"
  // }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
