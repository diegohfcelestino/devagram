export const validateName = (name: string): boolean => {
  return name.length > 2;
};

export const validateEmail = (email: string): boolean => {
  return email.length > 5 && email.includes("@") && email.includes(".");
};

export const validatePassword = (password: string): boolean => {
  return password.length > 3;
};

export const validateConfirmPassword = (
  password: string,
  confirmPassword: string
): boolean => {
  return password === confirmPassword;
};
