export const handleCheckInputNull = (text: string): string | null => {
  if (!text) return "Champ obligatoire";
  return null;
};
