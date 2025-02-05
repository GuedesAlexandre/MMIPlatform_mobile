export const checkMail = (text: string): string => {
  const mailRegex = /^[a-zA-Z0-9._%+-]+@edu\.univ-eiffel\.fr$/;
  return mailRegex.test(text)
    ? ""
    : "L'email doit être au format @edu.univ-eiffel.fr";
};

export const checkPassword = (text: string): string => {
  const passwordRegex =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/;
  return passwordRegex.test(text)
    ? ""
    : "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.";
};
