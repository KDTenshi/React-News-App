export const getShortDescription = (description: string, maxSize = 150) => {
  if (description.length < maxSize) return description;

  return `${description.substring(0, maxSize - 1).trim()}…`;
};
