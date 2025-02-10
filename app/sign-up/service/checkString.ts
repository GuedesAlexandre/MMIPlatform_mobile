export const checkMail = (mail: string): string | null => {
  const mailRegex = /^[a-zA-Z0-9._%+-]+@edu\.univ-eiffel\.fr$/;
  return mailRegex.test(mail)
    ? null
    : "L'email doit être au format @edu.univ-eiffel.fr";
};

export const checkPassword = (password: string): string | null => {
  const passwordRegex =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/;
  return passwordRegex.test(password)
    ? null
    : "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.";
};

export const checkConfirmPassword = (
  confirmPassword: string,
  password: string | undefined
): string | null => {
  if (!password) return "Veuillez entrer un mot de passe d'abord";
  return password === confirmPassword
    ? null
    : "Les mots de passe ne sont pas identiques";
};
