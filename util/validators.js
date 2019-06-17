module.exports.validateRegisterInput = (
  username,
  email,
  password,
  confirmPassword
) => {
  const errors = {};
  // username
  if (username.trim() === "") {
    errors.username = "Username must not be empty";
  }

  // email
  if (email.trim() === "") {
    errors.email = "Email must not be empty";
  } else {
    const emailRegex =
      " /^([0-9a-zA-Z]([-.w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-w]*[0-9a-zA-Z].)+[a-zA-Z]{2,9})$/";

    if (!email.match(emailRegex)) {
      errors.email = "Email must be a valid email address";
    }
  }

  // password
  if (password === "") {
    errors.password = "Password must not be empty";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "Passwords must match";
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0,
  };
};

module.exports.validateLoginInput = (username, password) => {
  const errors = {};
  // username
  if (username.trim() === "") {
    errors.username = "Username must not be empty";
  }

  // password
  if (password.trim() === "") {
    errors.password = "Password must not be empty";
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0,
  };
};
