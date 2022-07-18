const validateName = (name: string): boolean => {
  return name.length > 2;
};

const validadeEmail = (email: string): boolean => {
  return email.length > 5 && email.includes("@") && email.includes(".");
};

const validadePassword = (password: string): boolean => {
  return password.length > 3;
};

const validadeConfirPassword = (
  password: string,
  confirmPassword: string
): boolean => {
  return password === confirmPassword;
};
